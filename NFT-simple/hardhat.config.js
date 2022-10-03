require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });


const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;


module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};

// NFT Contract Address: 0xC82CB9fD6C39bFD82CBCF98C86cABB7cDaE4a3A8