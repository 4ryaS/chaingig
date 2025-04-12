// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Job is ReentrancyGuard {
    enum Status { InProgress, Submitted, Approved, Disputed }

    address public client;
    address public freelancer;
    uint256 public paymentAmount;

    string public jobTitle;
    string public jobDescription;

    string public submittedWork;
    Status public jobStatus;

    event WorkSubmitted(string submission);
    event WorkApproved();
    event DisputeRaised();
    event PaymentReleased(address recipient, uint256 amount);

    modifier onlyClient() {
        require(msg.sender == client, "Only client can call this");
        _;
    }

    modifier onlyFreelancer() {
        require(msg.sender == freelancer, "Only freelancer can call this");
        _;
    }

    modifier inStatus(Status _status) {
        require(jobStatus == _status, "Invalid job state");
        _;
    }

    constructor(
        address _client,
        address _freelancer,
        uint256 _payment,
        string memory _title,
        string memory _description
    ) payable {
        require(msg.value == 0, "Job should not be funded directly");

        client = _client;
        freelancer = _freelancer;
        paymentAmount = _payment;
        jobTitle = _title;
        jobDescription = _description;
        jobStatus = Status.InProgress;
    }

    function submitWork(string memory _submission)
        external
        onlyFreelancer
        inStatus(Status.InProgress)
    {
        submittedWork = _submission;
        jobStatus = Status.Submitted;
        emit WorkSubmitted(_submission);
    }

    function approveWork()
        external
        onlyClient
        inStatus(Status.Submitted)
        nonReentrant
    {
        jobStatus = Status.Approved;
        _releaseToFreelancer();
        emit WorkApproved();
    }

    function raiseDispute()
        external
        onlyClient
        inStatus(Status.Submitted)
    {
        jobStatus = Status.Disputed;
        emit DisputeRaised();
    }

    function _releaseToFreelancer() internal {
        require(address(this).balance >= paymentAmount, "Insufficient balance");
        (bool sent, ) = payable(freelancer).call{value: paymentAmount}("");
        require(sent, "Payment transfer failed");
        emit PaymentReleased(freelancer, paymentAmount);
    }

    // Helper view function
    function getJobDetails() external view returns (
        address, address, uint256, string memory, string memory, Status, string memory
    ) {
        return (
            client,
            freelancer,
            paymentAmount,
            jobTitle,
            jobDescription,
            jobStatus,
            submittedWork
        );
    }

    receive() external payable {}
}
