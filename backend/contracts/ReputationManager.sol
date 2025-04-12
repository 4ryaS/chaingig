// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract ReputationManager {
    struct Reputation {
        uint256 successfulJobs;
        uint256 disputedJobs;
        int256 score;
    }

    mapping(address => Reputation) public reputations;
    address public admin;

    event ReputationUpdated(
        address indexed user,
        int256 newScore,
        uint256 successfulJobs,
        uint256 disputedJobs
    );

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can update reputations");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function updateReputation(
        address _user,
        bool _success
    ) external onlyAdmin {
        if (_success) {
            reputations[_user].successfulJobs += 1;
            reputations[_user].score += 10;
        } else {
            reputations[_user].disputedJobs += 1;
            reputations[_user].score -= 10;
        }

        emit ReputationUpdated(
            _user,
            reputations[_user].score,
            reputations[_user].successfulJobs,
            reputations[_user].disputedJobs
        );
    }

    function getReputation(address _user)
        external
        view
        returns (uint256 successes, uint256 disputes, int256 score)
    {
        Reputation memory rep = reputations[_user];
        return (rep.successfulJobs, rep.disputedJobs, rep.score);
    }

    function changeAdmin(address _newAdmin) external onlyAdmin {
        require(_newAdmin != address(0), "Invalid admin");
        admin = _newAdmin;
    }
}
