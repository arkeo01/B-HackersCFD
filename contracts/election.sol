pragma solidity >=0.4.21 <0.6.0;

import "./zeppelin/ownable.sol";

contract VoterInterface{                //Just check how to give the address
    function changeVoterStatus(address _voter) external;
    function getVoterStatus(address _voter) external view returns(bool);
}

contract VoTokenInterface{              //Just check how to give the address
    function mintToken(address target, uint256 mintedAmount) external;
    function burnFrom(uint256 _value, address _voter) external returns (bool);
    function getBalance(address _voter) external view returns(uint);
}

contract CandidateInterface{
    function getCandidateVotes(address _candidate) external view returns(uint);
    function changeCandidateStatus(address _candidate) external;
    function voteCandidate(address _candidate) external returns (bool);
    function addCandidateAddress(address _candidate) external;
}

contract Election is Ownable{

    VoterInterface voterContract;
    VoTokenInterface voTokenContract;
    CandidateInterface candidateContract;

    uint voTokenValue = 10;

    struct Constituency{
        uint constituencyId;
        string name;
    }

    uint public numConstituency;

    mapping (uint => Constituency) public constituencies;   //all constituencies
    mapping (uint => address[]) public constCandidates;     //candidate participating in a particular constituency
    mapping (uint => address[]) public constVoters;         //voters associated with a constituency

    event constituencyCreated();

    function createConstituency(uint _constituencyId, string memory _name) public onlyOwner{
        Constituency memory constituency = Constituency(
            _constituencyId,
            _name
        );

        constituencies[_constituencyId] = constituency;
        emit constituencyCreated();
    }

    function validateVoter(address _voter) public onlyOwner{        //Issues VoToken and changes related bools
        voterContract.changeVoterStatus(_voter);                    //Setting eleigibility of voter to true
        voTokenContract.mintToken(_voter, voTokenValue + 5);        //Issuing VoToken to voter
    }

    function addVoterToConstituency(uint _constituencyId, address _voter) public onlyOwner{
        validateVoter(_voter);                                      //Validating voter before assigning it to constituency
        constVoters[_constituencyId].push(_voter);
    }

    function addCandidateToConstituency(uint _constituencyId, address _candidate) public onlyOwner{
        candidateContract.changeCandidateStatus(_candidate);
        candidateContract.addCandidateAddress(_candidate);
        constCandidates[_constituencyId].push(_candidate);
    }

	function totalVotesFor(address _candidate, uint _constituencyId) public view returns (uint){
		require(validCandidate(_candidate, _constituencyId), "Not a Valid Candidate");
		return candidateContract.getCandidateVotes(_candidate);
	}

	function voteForCandidate(address _candidate, uint _constituencyId, address _voter) public returns(bool) {
		require(validCandidate(_candidate, _constituencyId), "Not a Valid Candidate");
		require(voTokenContract.getBalance(_voter) >= voTokenValue && voterContract.getVoterStatus(_voter) == true, "Not a valid Voter");
        bool burned = voTokenContract.burnFrom(voTokenValue, _voter);
        require(burned == true, "Not Issued VoTokens");
        bool counted = candidateContract.voteCandidate(_candidate);
        return (burned && counted);
	}

	function validCandidate(address _candidate, uint _constituencyId) public view returns (bool){
		for(uint i = 0; i < constCandidates[_constituencyId].length; i++){
            if(constCandidates[_constituencyId][i] == _candidate)
                return true;
        }
		return false;
    }
<<<<<<< HEAD
}
=======
}
>>>>>>> master
