pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/PausableToken.sol";
import "zeppelin-solidity/contracts/token/MintableToken.sol";
import "zeppelin-solidity/contracts/token/BurnableToken.sol";


contract RiteToken is PausableToken,MintableToken,BurnableToken {

    string public name;
    string public symbol;
    uint8 public decimals;

    function burn(uint256 _value) whenNotPaused public {
        super.burn(_value);
    }
}
