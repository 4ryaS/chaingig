// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface IReputationManager {
    function updateReputation(address _user, bool _success) external;
}

interface IJob {
    function client() external view returns (address);
    function freelancer() external view returns (address);
    function paymentAmount() external view returns (uint256);
    function releaseTo(address recipient) external;
}

contract DisputeResolver {
    address public admin;
    IReputationManager public reputationManager;

    struct Dispute {
        address jobAddress;
        address client;
        address freelancer;
        uint256 votesForClient;
        uint256 votesForFreelancer;
        bool resolved;
    }

    mapping(uint256 => Dispute) public disputes;
    mapping(address => bool) public arbitrators;
    mapping(uint256 => mapping(address => bool)) public hasVoted;

    uint256 public disputeCount;

    event DisputeRegistered(uint256 disputeId, address jobAddress);
    event VoteCast(uint256 disputeId, address arbitrator, bool votedForClient);
    event DisputeResolved(uint256 disputeId, address winner);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin");
        _;
    }

    modifier onlyArbitrator() {
        require(arbitrators[msg.sender], "Not an arbitrator");
        _;
    }

    constructor(address _reputationManager) {
        admin = msg.sender;
        reputationManager = IReputationManager(_reputationManager);
    }

    function registerArbitrator(address _arb) external onlyAdmin {
        arbitrators[_arb] = true;
    }

    function registerDispute(address _job) external returns (uint256) {
        IJob job = IJob(_job);
        Dispute memory newDispute = Dispute({
            jobAddress: _job,
            client: job.client(),
            freelancer: job.freelancer(),
            votesForClient: 0,
            votesForFreelancer: 0,
            resolved: false
        });

        disputes[disputeCount] = newDispute;
        emit DisputeRegistered(disputeCount, _job);
        return disputeCount++;
    }

    function voteDispute(uint256 _id, bool voteForClient)
        external
        onlyArbitrator
    {
        Dispute storage d = disputes[_id];
        require(!d.resolved, "Already resolved");
        require(!hasVoted[_id][msg.sender], "Already voted");

        hasVoted[_id][msg.sender] = true;

        if (voteForClient) {
            d.votesForClient++;
        } else {
            d.votesForFreelancer++;
        }

        emit VoteCast(_id, msg.sender, voteForClient);
    }

    function resolveDispute(uint256 _id) external onlyAdmin {
        Dispute storage d = disputes[_id];
        require(!d.resolved, "Already resolved");

        address winner;
        bool freelancerWon;

        if (d.votesForClient > d.votesForFreelancer) {
            winner = d.client;
            freelancerWon = false;
        } else {
            winner = d.freelancer;
            freelancerWon = true;
        }

        d.resolved = true;

        // Release funds to winner from the job contract
        IJob(d.jobAddress).releaseTo(winner);

        // Update reputations
        reputationManager.updateReputation(d.freelancer, freelancerWon);
        reputationManager.updateReputation(d.client, !freelancerWon);

        emit DisputeResolved(_id, winner);
    }

    function isArbitrator(address _addr) external view returns (bool) {
        return arbitrators[_addr];
    }
}
