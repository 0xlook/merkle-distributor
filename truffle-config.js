const HDWalletProvider = require('@truffle/hdwallet-provider')
const { privateKey, publicKey } = require('./privatekey')

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(privateKey, 'wss://rinkeby.infura.io/ws/v3/8baf9b19ef5f4aa8b3c1f355794baeb1')
      },
      network_id: 4,
      from: publicKey,
    },
    live: {
      provider: function () {
        return new HDWalletProvider(privateKey, 'wss://mainnet.infura.io/ws/v3/8baf9b19ef5f4aa8b3c1f355794baeb1')
      },
      network_id: 1,
      gasPrice: 120e9,
      from: publicKey,
      gas: 2e6,
    },
  },
  api_keys: {
    etherscan: 'XY7JJPPYPNVVYAE22S5NS1W81NQ9727IVE',
  },
  plugins: ['truffle-plugin-verify'],
  compilers: {
    solc: {
      version: '0.6.11',
      docker: false,
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
}
