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
    required: ['RPC_URL', 'PRIVATE_KEY'],
    properties: {
      RPC_URL: { type: 'string' },
      PRIVATE_KEY: { type: 'string' },
      CONTRACT_ADDRESS: { type: 'string' }
    }
  }
});

// Contract endpoints
server.post('/contracts/deploy', async (request, reply) => {
  try {
    const contractData = request.body;
    const contractAddress = await contractService.deployContract(contractData);
    return { contractAddress };
  } catch (error) {
    server.log.error(error);
    reply.status(500).send({ error: 'Failed to deploy contract' });
  }
});

server.post('/contracts/:address/release-escrow', async (request, reply) => {
  try {
    const { address } = request.params as { address: string };
    const { jobId } = request.body as { jobId: string };
    await contractService.releaseEscrow(address, jobId);
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
    await contractService.createDispute(address, disputeData);
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
    await contractService.resolveDispute(address, disputeId, resolution);
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

const start = async () => {
  try {
    await server.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start(); 