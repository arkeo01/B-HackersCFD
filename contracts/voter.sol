pragma solidity >=0.4.21 <0.6.0;

contract Voter{                                         //password for helper component login functionality to be added
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

    function getVoterStatus(address _voter) external view returns(bool) {
        return (voters[_voter].canVote);
    }

    function changeVoterStatus(address _voter) external {    // Security Loophole as this may be accessed by anyone externally
        VoterDetails memory voter = voters[_voter];
        if(voter.canVote == false)
            voter.canVote == true;
        else
            voter.canVote == false;
        voters[_voter] = voter;
    }

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
