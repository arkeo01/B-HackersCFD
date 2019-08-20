pragma solidity >=0.4.21 <0.6.0;

import "./ownable.sol";

contract Voter is Ownable{                                         //password for helper component login functionality to be added
    struct VoterDetails{
        string name;
        uint age;
        uint mobileNo;
        uint constituencyId;
        uint aadhaarno;
        bool voted;
        bool canVote;
        string hashOfFingerprint;                      //unique cryptographic id of the voter to be used while voting
    }

    uint public numVoters;

    mapping(address => VoterDetails) public voters;
    address[] public voterAddresses;

    event voterRegistered(
        string name,
        uint aadharno
    );

    function getNumOfVoters() public view returns(uint) {
        return numVoters;
    }

    function addVoter(
        string memory _name,
        uint _age,
        uint _mobileNo,
        uint _constituencyId,
        uint _aadharno,
        string memory _hashOfFingerprint
        ) public {
		
	    numVoters++;
            voterAddresses.push(msg.sender);
            VoterDetails memory voter = VoterDetails(
                _name,
                _age,
                _mobileNo,
                _constituencyId,
                _aadharno,
                false,
                false,
                _hashOfFingerprint
            );

            voters[msg.sender] = voter;
            emit voterRegistered(_name, _aadharno);
    }

}
