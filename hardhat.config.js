/**
* @type import('hardhat/config').HardhatUserConfig
*/
require("@nomiclabs/hardhat-ethers");
require('dotenv').config();
const { PRIVATE_KEY } = process.env;
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
     matic: {
      url: "https://rpc-mainnet.maticvigil.com/",
      gasPrice:1100000000,
      accounts: [PRIVATE_KEY],
      chainId:137,

    }
  },
  solidity: {
    version: "0.8.12",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}