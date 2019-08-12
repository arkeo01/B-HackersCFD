pragma solidity ^0.5.7;

contract VoterCore{
    struct Voter{
        string name;
        uint age;
        uint constituencyId;
        uint pincode;
        uint aadhaarno;
        bool hasVoted;
        bool isRegistered;
        bool isCandidate;
        //some unique cryptographic id has to be given
    }
    
    mapping(address => Voter) public voters;
    
    uint public voterNos;


    event voterRegistered{
        string name,
        uint aadharno
    };
    
    function addVoter(string _name, uint _age, uint _constituencyId, uint _pincode,uint _aadharno) public {
        voterNos++;
        Voter memory voter = Voter(
            _name,
            _age,
            _constituencyId,
            _pincode,
            _aadharno,
            false,
            true,
            false
        );
        
        voters[msg.sender] = voter;
        emit voterRegistered;
    }


    //candidate section starts
    
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
