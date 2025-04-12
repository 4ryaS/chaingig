import { ethers } from 'ethers';
import { prisma } from '../lib/prisma';

export class ContractService {
  private provider: ethers.JsonRpcProvider;
  private signer: ethers.Wallet;

  constructor(rpcUrl: string, privateKey: string) {
    this.provider = new ethers.JsonRpcProvider(rpcUrl);
    this.signer = new ethers.Wallet(privateKey, this.provider);
  }

  async getContract(contractAddress: string, abi: any): Promise<ethers.Contract> {
    return new ethers.Contract(contractAddress, abi, this.signer);
  }

  async releaseEscrow(contractAddress: string, jobId: string, abi: any): Promise<void> {
    // Check if the job is completed
    const job = await prisma.job.findUnique({
      where: { id: jobId },
      include: { contract: true }
    });

    if (!job) {
      throw new Error('Job not found');
    }

    if (job.status !== 'COMPLETED') {
      throw new Error('Cannot release escrow: Job is not completed');
    }

    if (job.contract?.smartContract !== contractAddress) {
      throw new Error('Contract address mismatch');
    }

    const contract = await this.getContract(contractAddress, abi);
    const tx = await contract.releaseEscrow(jobId);
    await tx.wait();
  }

  async createDispute(contractAddress: string, disputeData: any, abi: any): Promise<void> {
    const contract = await this.getContract(contractAddress, abi);
    const tx = await contract.createDispute(
      disputeData.jobId,
      disputeData.reason,
      disputeData.evidence
    );
    await tx.wait();
  }

  async resolveDispute(contractAddress: string, disputeId: string, resolution: any, abi: any): Promise<void> {
    const contract = await this.getContract(contractAddress, abi);
    const tx = await contract.resolveDispute(
      disputeId,
      resolution.decision,
      resolution.reason
    );
    await tx.wait();
  }

  async getContractBalance(contractAddress: string): Promise<string> {
    const balance = await this.provider.getBalance(contractAddress);
    return ethers.formatEther(balance);
  }
} 