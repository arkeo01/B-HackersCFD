pragma solidity >=0.4.21 <0.6.0;

import "./voter.sol";

contract Candidate is Voter{

	struct CandidateDetails {
		string party;
		uint constituencyId;
		bool accepted;                        //Whether the candidate is accepted to participate in elections
	}

	uint numCandidates;                     //Total Candidates

	mapping (address => CandidateDetails) candidates;       //Single point access for all candidates to ensure security
	mapping(address => uint) public votesReceived;          //votes recieved by any candidate

	address[] public candidateAddresses;					//Candidate Addresses

	function addCandidate(string memory _party, uint _constituencyId) public {
		numCandidates++;
		CandidateDetails memory candidate = CandidateDetails(
			_party,
			_constituencyId,
			false
		);
		candidates[msg.sender] = candidate;
	}

	function addCandidateAddress(address _candidate) external {
		candidateAddresses.push(_candidate);
	}

	function getNumOfCandidates() public view returns(uint) {
		return numCandidates;
	}

	function changeCandidateStatus(address _candidate) external {
		CandidateDetails memory candidate = candidates[_candidate];
		if(candidate.accepted == false)
			candidate.accepted == true;
		else
			candidate.accepted == false;

		candidates[_candidate] = candidate;
	}

	function getCandidate(address _candidate) public view returns (string memory, string memory) {
		CandidateDetails memory candidate = candidates[_candidate];
		VoterDetails memory voter = voters[_candidate];
		return (voter.name, candidate.party);
	}

	function getCandidateVotes(address _candidate) external view returns(uint){
		return (votesReceived[_candidate]);
	}

	function voteCandidate(address _candidate) external returns(bool){
		votesReceived[_candidate] += 1;
		return true;
	}
}
