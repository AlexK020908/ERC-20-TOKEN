const { network } = require("hardhat");
const { networkConfig } = require("../helper-hardhat-config");
const { verify } = require("../utils/verify");
const { ethers } = require("hardhat");

module.exports = async function ({ deployments, getNamedAccounts }) {
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const chainId = network.config.chainId;
  const args = [networkConfig[chainId]["initialSupply"]];
  const token = await deploy("OurToken", {
    from: deployer,
    args: args,
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  if (chainId != 31337 && process.env.ETH_API_KEY) {
    //verify
    await verify(token.address, args);
  }

  log("====================================");
};

module.exports.tags = ["all", "token"];
