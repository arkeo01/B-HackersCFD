pragma solidity >=0.4.21 <0.6.0;

import "./voter.sol";

contract Candidate is Voter{

	struct CandidateDetails {
		bytes32 party;
		uint constituencyId;
		bool accepted;                        //Whether the candidate is accepted to participate in elections
	}

	uint numCandidates;                     //Total Candidates

	mapping (address => CandidateDetails) candidates;       //Single point access for all candidates to ensure security
	mapping(address => uint) public votesReceived;          //votes recieved by any candidate

	function addCandidate(bytes32 _party, uint _constituencyId) public {
		numCandidates++;
		CandidateDetails memory candidate = CandidateDetails(
			_party,
			_constituencyId,
			false
		);
		candidates[msg.sender] = candidate;
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

	function getCandidate(address _candidate) public view returns (bytes memory, bytes32) {
		CandidateDetails memory candidate = candidates[_candidate];
		VoterDetails memory voter = voters[_candidate];
		return (voter.name, candidate.party);
	}

	function getCandidateVotes(address _candidate) external view returns(uint){
		return (votesReceived[_candidate]);
	}

	function voteForCandidate(address _candidate) external {			//voTokens are to be integrated
		votesReceived[_candidate] += 1;
	}
}
