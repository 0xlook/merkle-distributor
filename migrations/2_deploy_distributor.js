const MerkleDistributor = artifacts.require('MerkleDistributor')

const root = '0x61875005891c53e9b924c6988cf8f612d8bce3472f531f07c5c419abc73d3eaa'
const ovrToken = '0x8d05f69bd9e804eb467c7e1f2902ecd5e41a72da'

module.exports = function (deployer) {
  deployer.deploy(MerkleDistributor, ovrToken, root)
}
