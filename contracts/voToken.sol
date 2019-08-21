pragma solidity >=0.4.21 <0.6.0;

import "./zeppelin/ownable.sol";

import "./tokenERC20.sol";
/******************************************/
/*       Change the name of the contract from VoToken to your own    token name
*/
/******************************************/
contract VoToken is Ownable, TokenERC20 {
    // uint256 public sellPrice;
    // uint256 public buyPrice;
    mapping (address => bool) public frozenAccount;
    /* This generates a public event on the blockchain that will notify clients */
    event FrozenFunds(address target, bool frozen);

    /* Initializes contract with initial supply tokens to the creator of the contract */
    constructor(
        uint256 initialSupply,
        string memory tokenName,
        string memory tokenSymbol
    ) TokenERC20(100, "VoToken", "VoT") public {}

    function mintToken(address target, uint256 mintedAmount) onlyOwner public {
        balanceOf[target] += mintedAmount;
        totalSupply += mintedAmount;
        emit Transfer(address(0), msg.sender, mintedAmount);
        emit Transfer(msg.sender, target, mintedAmount);
    }

    function freezeAccount(address target, bool freeze) onlyOwner public {
        frozenAccount[target] = freeze;
        emit FrozenFunds(target, freeze);
    }

    function getBalance(address _voter) external view returns(uint){
		return (balanceOf[_voter]);
	}

}