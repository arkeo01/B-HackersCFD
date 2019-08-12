pragma solidity ^0.5.7;                                  

import "./voterCore.sol";

contract Candidate is VoterCore{
	mapping (address => Voter) public candidates;
	uint public candidatecount;

	event candidateRegistered{
		string _name;
	};

	function addCandidate(string _name, uint _age, uint _constituencyId, uint _pincode,uint _aadharno) public{
			candidatecount++;
			Voter memory candidate = Voter(
			_name,
            _age,
            _constituencyId,
            _pincode,
            _aadharno,
            false,
            true,
            true
			);
		candidates[msg.sender] = candidate;
		emit candidateRegistered;
	}
}