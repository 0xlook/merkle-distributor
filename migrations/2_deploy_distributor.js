const MerkleDistributor = artifacts.require('MerkleDistributor')

module.exports = function (deployer) {
  deployer.deploy(MerkleDistributor)
}
