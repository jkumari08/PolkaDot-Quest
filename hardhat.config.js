// hardhat.config.js
require("dotenv").config();                 // ← load .env first
require("@nomicfoundation/hardhat-toolbox");

const pk = process.env.PRIVATE_KEY;         // ← your private key, or undefined

module.exports = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8555",
      chainId: 31337
    },
    moonbaseAlpha: {
      url: process.env.RPC_URL || "",       // safe fallback if you haven’t set RPC_URL
      chainId: 1287,
      accounts: pk ? [ pk ] : []            // ← only include the key if pk is truthy
    }
  }
};
