pragma solidity ^0.5.7

contract Voter{
    struct Applicant{
        string name;
        string fatherName;
        uint age;
        uint assemblyid;
        uint pincode;
        uint aadhaarno;
    }
    
    mapping(uint => bool) public registered;
    mapping(address => Applicant) voters
    var voterlist = Voter[];
    
    event voterRegistered{
        
    };
    
    function addVoter(string _name, string _fatherName, uint _age,uint _assemblyid, uint _pincode,uint _aadharno) private {
        Applicant memory temp = Applicant(
            _name,
            _fatherName,
            _age,
            _assemblyid,
            _pincode
            _aadharno
        );
        
        voters[msg.sender] = temp;
        emit voterRegistered
    }
    
    function isregistered(uint _aadharno)public {
        
    }
    
    function checkaadhar(uint _aadharno) private{
        
    }
}
