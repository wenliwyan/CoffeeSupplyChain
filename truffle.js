const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(
        "...",
        "https://rinkeby.infura.io/v3/..."),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
    }
  }
};