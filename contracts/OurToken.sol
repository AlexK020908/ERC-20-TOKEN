//SPDX-License-Identifier:MIT
pragma solidity ^0.8.7;
//we are going to import openzeppling into our project with
// yarn add --dev @openzeppelin/contracts
//then we improt it
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OurToken is ERC20 {
    //note : since solidity doesn't do decimals very well --> 50 means 50 wei
    //initla supply 50e18--> since default is 18 in the contract
    constructor(uint256 initialSupply) ERC20("OurToken", "OT") {
        _mint(msg.sender, initialSupply); //this functions allows us to create tokens
        //first paramter --> is the person that owns all the tokens to start
    }
}
