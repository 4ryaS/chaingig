export const contractConfig = {
  rpcUrl: process.env.RPC_URL || 'http://localhost:8545',
  privateKey: process.env.PRIVATE_KEY || '',
  contractAddress: process.env.CONTRACT_ADDRESS || '',
  contractABI: process.env.CONTRACT_ABI || '[]',
  disputeResolverAddress: process.env.DISPUTE_RESOLVER_ADDRESS || '',
  reputationManagerAddress: process.env.REPUTATION_MANAGER_ADDRESS || '',
  jobFactoryABI: process.env.JOB_FACTORY_ABI || '[]',
  disputeResolverABI: process.env.DISPUTE_RESOLVER_ABI || '[]',
  reputationManagerABI: process.env.REPUTATION_MANAGER_ABI || '[]',
}; 