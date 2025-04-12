// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "./Job.sol";

contract JobFactory {
    address[] public allJobs;
    mapping(address => address[]) public clientJobs;

    event JobCreated(
        address indexed jobAddress,
        address indexed client,
        uint256 payment,
        string title,
        string description
    );

    function createJob(
        string memory _title,
        string memory _description,
        address _freelancer,
        uint256 _payment
    ) external payable {
        require(msg.value == _payment, "Incorrect escrow amount sent");

        Job newJob = new Job(
            msg.sender,
            _freelancer,
            _payment,
            _title,
            _description
        );

        payable(address(newJob)).transfer(msg.value);

        allJobs.push(address(newJob));
        clientJobs[msg.sender].push(address(newJob));

        emit JobCreated(
            address(newJob),
            msg.sender,
            _payment,
            _title,
            _description
        );
    }

    function getJobsByClient(address _client) external view returns (address[] memory) {
        return clientJobs[_client];
    }

    function getAllJobs() external view returns (address[] memory) {
        return allJobs;
    }
}
