import { ethers } from 'ethers';
import { PrismaClient } from '@prisma/client';
import { contractConfig } from '../config/contract';

const prisma = new PrismaClient();

export class ContractService {
  private provider: ethers.JsonRpcProvider;
  private wallet: ethers.Wallet;
  private jobContract: ethers.Contract;
  private disputeResolverContract: ethers.Contract;
  private reputationManagerContract: ethers.Contract;

  constructor() {
    this.provider = new ethers.JsonRpcProvider(contractConfig.rpcUrl);
    this.wallet = new ethers.Wallet(contractConfig.privateKey, this.provider);
    
    this.jobContract = new ethers.Contract(
      contractConfig.contractAddress,
      contractConfig.contractABI,
      this.wallet
    );

    this.disputeResolverContract = new ethers.Contract(
      contractConfig.disputeResolverAddress,
      contractConfig.disputeResolverABI,
      this.wallet
    );

    this.reputationManagerContract = new ethers.Contract(
      contractConfig.reputationManagerAddress,
      contractConfig.reputationManagerABI,
      this.wallet
    );
  }

  async releaseEscrow(jobId: string, amount: string) {
    try {
      const tx = await this.jobContract.releaseEscrow(jobId, ethers.parseEther(amount));
      await tx.wait();

      await prisma.job.update({
        where: { id: jobId },
        data: { status: 'COMPLETED' }
      });

      return { success: true, transactionHash: tx.hash };
    } catch (error) {
      console.error('Error releasing escrow:', error);
      throw error;
    }
  }

  async createDispute(jobId: string, reason: string, evidence: string) {
    try {
      const job = await prisma.job.findUnique({
        where: { id: jobId },
        include: { contract: true }
      });

      if (!job || !job.contract) {
        throw new Error('Job or contract not found');
      }

      const tx = await this.disputeResolverContract.createDispute(
        job.contract.smartContract,
        reason,
        evidence
      );
      const receipt = await tx.wait();

      const disputeId = receipt.logs[0].args.disputeId;

      const dispute = await prisma.dispute.create({
        data: {
          title: `Dispute for Job ${jobId}`,
          description: reason,
          reason,
          evidence,
          status: 'OPEN',
          contractId: job.contract.id,
          jobId: job.id,
          smartContract: job.contract.smartContract,
          disputeId
        }
      });

      await prisma.job.update({
        where: { id: jobId },
        data: { status: 'DISPUTED' }
      });

      return { success: true, dispute };
    } catch (error) {
      console.error('Error creating dispute:', error);
      throw error;
    }
  }

  async resolveDispute(disputeId: string, resolution: string, resolutionReason: string) {
    try {
      const dispute = await prisma.dispute.findUnique({
        where: { id: disputeId },
        include: { contract: true }
      });

      if (!dispute || !dispute.smartContract || !dispute.disputeId) {
        throw new Error('Dispute not found or missing blockchain data');
      }

      const tx = await this.disputeResolverContract.resolveDispute(
        dispute.disputeId,
        resolution,
        resolutionReason
      );
      await tx.wait();

      const updatedDispute = await prisma.dispute.update({
        where: { id: disputeId },
        data: {
          status: 'RESOLVED',
          resolution,
          resolutionReason
        }
      });

      await prisma.job.update({
        where: { id: dispute.jobId },
        data: { status: 'COMPLETED' }
      });

      return { success: true, dispute: updatedDispute };
    } catch (error) {
      console.error('Error resolving dispute:', error);
      throw error;
    }
  }

  async getContractBalance(jobId: string) {
    try {
      const job = await prisma.job.findUnique({
        where: { id: jobId },
        include: { contract: true }
      });

      if (!job || !job.contract) {
        throw new Error('Job or contract not found');
      }

      const balance = await this.jobContract.getBalance(job.contract.smartContract);
      return { balance: ethers.formatEther(balance) };
    } catch (error) {
      console.error('Error getting contract balance:', error);
      throw error;
    }
  }

  async getJobDetails(jobId: string) {
    try {
      const job = await prisma.job.findUnique({
        where: { id: jobId },
        include: {
          contract: true,
          client: true,
          proposals: {
            include: {
              freelancer: true
            }
          }
        }
      });

      if (!job) {
        throw new Error('Job not found');
      }

      return job;
    } catch (error) {
      console.error('Error getting job details:', error);
      throw error;
    }
  }

  async getContract(contractAddress: string, abi: any): Promise<ethers.Contract> {
    return new ethers.Contract(contractAddress, abi, this.wallet);
  }

  async submitWork(contractAddress: string, jobId: string, submission: string, abi: any): Promise<void> {
    const jobContract = await this.getContract(contractAddress, abi);
    const tx = await jobContract.submitWork(submission);
    await tx.wait();
    
    // Update job status in database
    await prisma.job.update({
      where: { id: jobId },
      data: { status: 'SUBMITTED' }
    });
  }
  
  async getReputation(userAddress: string): Promise<any> {
    return await this.reputationManagerContract.getReputation(userAddress);
  }
  
  async getAllJobs(): Promise<string[]> {
    return await this.jobContract.getAllJobs();
  }
  
  async getJobsByClient(clientAddress: string): Promise<string[]> {
    return await this.jobContract.getJobsByClient(clientAddress);
  }
} 