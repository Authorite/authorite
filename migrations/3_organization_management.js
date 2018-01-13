var OrganizationManagement = artifacts.require("./organization/OrganizationManagement.sol");

module.exports = function(deployer) {
  deployer.deploy(OrganizationManagement);
};
