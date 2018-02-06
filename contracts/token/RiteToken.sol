pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/PausableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "zeppelin-solidity/contracts/token/ERC20/BurnableToken.sol";
import "zeppelin-solidity/contracts/token/ERC827/ERC827Token.sol";


contract RiteToken is ERC827Token, PausableToken,MintableToken,BurnableToken {

    string public name;
    string public symbol;
    uint8 public decimals;

    function burn(uint256 _value) whenNotPaused public {
        super.burn(_value);
    }
}
