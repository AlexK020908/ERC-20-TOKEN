const { ethers } = require("hardhat");

//if you are on network A use this address, B use this address, etc
const networkConfig = {
  4: {
    name: "rinkeby",
    initialSupply: "50e18",
    blockConfirmations: "2",
  },

  31337: {
    name: "hardhat",
    initialSupply: "50e18",
    blockConfirmations: "1",
  },
};

//we get the gaslane in the docs for rinkeby

const developmentChains = ["hardhat", "localhost"];
module.exports = {
  networkConfig,
  developmentChains,
};
