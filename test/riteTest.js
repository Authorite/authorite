var RiteToken = artifacts.require('./token/RiteToken.sol')

contract('RiteToken', function(accounts) {

    it("should deploy account empty RiteToken balance ", function() {
        return RiteToken.deployed().then(function(instance) {
            return instance.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            assert.equal(balance.valueOf(), 0, "account is not empty");
        });
    });

    it("should mint 128 coins and give these to account[0]", function() {
        return RiteToken.deployed().then(function(instance) {
            instance.mint(accounts[0], 128)
            return instance.balanceOf.call(accounts[0]);
        }).then(function(balance) {
            assert.equal(128, balance.valueOf(), "128 was not minted");
        });
    });

    it("should send coin via transfer correctly", function() {
        var meta;

        // Get initial balances of first and second account.
        var account_one = accounts[0];
        var account_two = accounts[1];

        var account_one_starting_balance;
        var account_two_starting_balance;
        var account_one_ending_balance;
        var account_two_ending_balance;

        var amount = 10;

        return RiteToken.deployed().then(function(instance) {
            meta = instance;
            return meta.balanceOf.call(account_one);
        }).then(function(balance) {
            account_one_starting_balance = balance.toNumber();
            return meta.balanceOf.call(account_two);
        }).then(function(balance) {
            account_two_starting_balance = balance.toNumber();
            return meta.balanceOf.call(account_one);
        }).then(function(balance) {
            return meta.transfer(account_two, amount);
        }).then(function() {
            return meta.balanceOf.call(account_one);
        }).then(function(balance) {
            account_one_ending_balance = balance.toNumber();
            return meta.balanceOf.call(account_two);
        }).then(function(balance) {
            account_two_ending_balance = balance.toNumber();

            assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
            assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
        });
    });

    it("should approve amount to transferFrom correctly", function() {
        var meta;
        var account_one = accounts[0];
        var account_two = accounts[1];
        var approvalAmount = 10;

        return RiteToken.deployed().then(function(instance) {
            meta = instance;
            return meta.balanceOf.call(account_one);
        }).then(function(balance) {
            return meta.approve(account_two, 0);
        }).then(function() {
            return meta.approve(account_two, approvalAmount);
        }).then(function() {
            return meta.allowance.call(account_one, account_two);
        }).then(function(allowance){
            var account_one_allowance_for_account_two = allowance.toNumber();
            assert.equal(approvalAmount, account_one_allowance_for_account_two, "Allowance was not correctly set");
        })
    })

    it("should send coin via transferFrom correctly", function() {
        var meta;

        // Get initial balances of first and second account.
        var account_one = accounts[0];
        var account_two = accounts[1];

        var account_one_starting_balance;
        var account_two_starting_balance;
        var account_one_ending_balance;
        var account_two_ending_balance;

        var amount = 10;

        return RiteToken.deployed().then(function(instance) {
            meta = instance;
            return meta.balanceOf.call(account_one);
        }).then(function(balance) {
            account_one_starting_balance = balance.toNumber();
            return meta.balanceOf.call(account_two);
        }).then(function(balance) {
            account_two_starting_balance = balance.toNumber();
            return meta.allowance.call(account_one, account_two);
        }).then(function(allowance){
            return meta.transferFrom(account_one, account_two, amount,{from: account_two});
        }).then(function() {
            return meta.balanceOf.call(account_one);
        }).then(function(balance) {
            account_one_ending_balance = balance.toNumber();
            return meta.balanceOf.call(account_two);
        }).then(function(balance) {
            account_two_ending_balance = balance.toNumber();
            assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
            assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
        });
    });

    it("should throw revert exception on sending coing via transferFrom", function() {
        var meta;

        // Get initial balances of first and second account.
        var account_one = accounts[0];
        var account_two = accounts[1];

        var account_one_starting_balance;
        var account_two_starting_balance;
        var account_one_ending_balance;
        var account_two_ending_balance;

        var amount = 10;

        return RiteToken.deployed().then(function(instance) {
            meta = instance;
            return meta.balanceOf.call(account_one);
        }).then(function(balance) {
            account_one_starting_balance = balance.toNumber();
            return meta.balanceOf.call(account_two);
        }).then(function(balance) {
            account_two_starting_balance = balance.toNumber();
            return meta.transferFrom(account_one, account_two, amount,{from: account_two});
        }).then(function() {
            assert(false,"Expected revert exception wasn't thrown")
        }).catch(function(error){
            assert.include(error.message, 'revert', 'Expected revert on not approved amount wasn\'t thrown');
        });
    });

    it("should send data via transferFrom correctly", function() {
        var meta;

        // Get initial balances of first and second account.
        var account_one = accounts[0];
        var account_two = accounts[1];

        var account_one_starting_balance;
        var account_two_starting_balance;
        var account_one_ending_balance;
        var account_two_ending_balance;

        var amount = 0;
        vat data = '';

        return RiteToken.deployed().then(function(instance) {
            meta = instance;
            return meta.balanceOf.call(account_one);
        }).then(function(balance) {
            account_one_starting_balance = balance.toNumber();
            return meta.balanceOf.call(account_two);
        }).then(function(balance) {
            account_two_starting_balance = balance.toNumber();

        }).then(function() {
            return meta.balanceOf.call(account_one);
        }).then(function(balance) {
            account_one_ending_balance = balance.toNumber();
            return meta.balanceOf.call(account_two);
        }).then(function(balance) {
            account_two_ending_balance = balance.toNumber();
            assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
            assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
        })
    });
});
