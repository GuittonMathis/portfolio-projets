require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); // Pour utiliser les variables d'environnement

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.20", // J'ai utilisé 0.8.20 pour la cohérence
      },
      {
        version: "0.8.0",  // Version 0.8.0 que tu utilises pour d'autres imports
      },
    ]
  },
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_API_URL,  // Alchemy URL pour Sepolia, stockée dans .env
      accounts: [`0x${process.env.PRIVATE_KEY}`],  // Clé privée pour signer les transactions
    },
    localhost: {
      url: "http://127.0.0.1:8545" // Pour les tests locaux
    }
  }
};
