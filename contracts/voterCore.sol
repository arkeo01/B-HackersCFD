pragma solidity ^0.5.7;

contract VoterCore{
    struct Voter{
        string name;
        uint age;
        uint constituencyId;
        uint pincode;
        uint aadhaarno;
        bool hasVoted;
        bool canVote;
        //some unique cryptographic id has to be given
    }
    
    mapping(address => Voter) public voters;
    
    event voterRegistered{
        string name,
        uint aadharno
    };
    
    function addVoter(string _name, uint _age, uint _constituencyId, uint _pincode,uint _aadharno) public {
        Voter memory voter = Voter(
            _name,
            _age,
            _constituencyId,
            _pincode,
            _aadharno,
            false,
            false
        );
        
        voters[msg.sender] = voter;
        emit voterRegistered;
    }
    
    // function isregistered(uint _aadharno)public {
        
    // }
    
    // function checkaadhar(uint _aadharno) private{
        
    // }
}
