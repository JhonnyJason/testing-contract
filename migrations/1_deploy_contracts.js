var Counter = artifacts.require("Counter")

module.exports = function(deployer, network, accounts) {
    deployer.deploy(Counter)
};
