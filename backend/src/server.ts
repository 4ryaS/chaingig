import fastify from 'fastify';
import cors from '@fastify/cors';
import env from '@fastify/env';
import { ContractService } from './services/contractService';
import { contractConfig } from './config/contract';

const server = fastify({
  logger: true
});

// Initialize contract service
const contractService = new ContractService(
  contractConfig.rpcUrl,
  contractConfig.privateKey
);

// Register plugins
server.register(cors, {
  origin: true
});

server.register(env, {
  schema: {
    type: 'object',
    required: ['RPC_URL', 'PRIVATE_KEY', 'CONTRACT_ADDRESS', 'CONTRACT_ABI', 'DISPUTE_RESOLVER_ADDRESS', 'REPUTATION_MANAGER_ADDRESS'],
    properties: {
      RPC_URL: { type: 'string' },
      PRIVATE_KEY: { type: 'string' },
      CONTRACT_ADDRESS: { type: 'string' },
      CONTRACT_ABI: { type: 'string' },
      DISPUTE_RESOLVER_ADDRESS: { type: 'string' },
      REPUTATION_MANAGER_ADDRESS: { type: 'string' }
    }
  }
});

// Contract endpoints
server.post('/contracts/:address/release-escrow', async (request, reply) => {
  try {
    const { address } = request.params as { address: string };
    const { jobId } = request.body as { jobId: string };
    const abi = JSON.parse(contractConfig.contractABI);
    await contractService.releaseEscrow(address, jobId, abi);
    return { success: true };
  } catch (error) {
    server.log.error(error);
    if (error instanceof Error) {
      if (error.message.includes('Job not found')) {
        reply.status(404).send({ error: 'Job not found' });
      } else if (error.message.includes('Job is not completed')) {
        reply.status(400).send({ error: 'Cannot release escrow: Job is not completed' });
      } else if (error.message.includes('Contract address mismatch')) {
        reply.status(400).send({ error: 'Contract address mismatch' });
      } else {
        reply.status(500).send({ error: 'Failed to release escrow' });
      }
    } else {
      reply.status(500).send({ error: 'Failed to release escrow' });
    }
  }
});

server.post('/contracts/:address/disputes', async (request, reply) => {
  try {
    const { address } = request.params as { address: string };
    const disputeData = request.body;
    const abi = JSON.parse(contractConfig.contractABI);
    await contractService.createDispute(address, disputeData, abi);
    return { success: true };
  } catch (error) {
    server.log.error(error);
    reply.status(500).send({ error: 'Failed to create dispute' });
  }
});

server.post('/contracts/:address/disputes/:disputeId/resolve', async (request, reply) => {
  try {
    const { address, disputeId } = request.params as { address: string; disputeId: string };
    const resolution = request.body;
    const abi = JSON.parse(contractConfig.contractABI);
    await contractService.resolveDispute(address, disputeId, resolution, abi);
    return { success: true };
  } catch (error) {
    server.log.error(error);
    reply.status(500).send({ error: 'Failed to resolve dispute' });
  }
});

server.get('/contracts/:address/balance', async (request, reply) => {
  try {
    const { address } = request.params as { address: string };
    const balance = await contractService.getContractBalance(address);
    return { balance };
  } catch (error) {
    server.log.error(error);
    reply.status(500).send({ error: 'Failed to get contract balance' });
  }
});

// New endpoints for additional functionality
server.get('/contracts/:address/details', async (request, reply) => {
  try {
    const { address } = request.params as { address: string };
    const abi = JSON.parse(contractConfig.contractABI);
    const details = await contractService.getJobDetails(address, abi);
    return { details };
  } catch (error) {
    server.log.error(error);
    reply.status(500).send({ error: 'Failed to get job details' });
  }
});

server.post('/contracts/:address/submit-work', async (request, reply) => {
  try {
    const { address } = request.params as { address: string };
    const { jobId, submission } = request.body as { jobId: string; submission: string };
    const abi = JSON.parse(contractConfig.contractABI);
    await contractService.submitWork(address, jobId, submission, abi);
    return { success: true };
  } catch (error) {
    server.log.error(error);
    reply.status(500).send({ error: 'Failed to submit work' });
  }
});

server.get('/users/:address/reputation', async (request, reply) => {
  try {
    const { address } = request.params as { address: string };
    const reputation = await contractService.getReputation(address);
    return { reputation };
  } catch (error) {
    server.log.error(error);
    reply.status(500).send({ error: 'Failed to get user reputation' });
  }
});

server.get('/jobs', async (request, reply) => {
  try {
    const jobs = await contractService.getAllJobs();
    return { jobs };
  } catch (error) {
    server.log.error(error);
    reply.status(500).send({ error: 'Failed to get all jobs' });
  }
});

server.get('/jobs/client/:address', async (request, reply) => {
  try {
    const { address } = request.params as { address: string };
    const jobs = await contractService.getJobsByClient(address);
    return { jobs };
  } catch (error) {
    server.log.error(error);
    reply.status(500).send({ error: 'Failed to get client jobs' });
  }
});

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start(); 