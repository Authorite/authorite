var RiteToken = artifacts.require("./token/RiteToken.sol");

module.exports = function(deployer) {
  deployer.deploy(RiteToken);
};
