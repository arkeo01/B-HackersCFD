pragma solidity ^0.5.7;

import "./candidate.sol";

contract Official is Candidate {
	event voterValidated{
		
	};
	Voter memory voter = candidates[msg.sender];
	function approveCandidate(Voter voter) public {
		voter.isCandidate=true;
		emit voterValidated;
	}
}