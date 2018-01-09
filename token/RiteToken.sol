pragma solidity ^0.4.18;

import "../node_modules/zeppelin-solidity/contracts/token/PausableToken.sol";
import "../node_modules/zeppelin-solidity/contracts/token/MintableToken.sol";
import "../node_modules/zeppelin-solidity/contracts/token/BurnableToken.sol";
import "../node_modules/zeppelin-solidity/contracts/token/DetailedERC20.sol";


contract RiteToken is PausableToken,MintableToken,BurnableToken,DetailedERC20 {

    function burn(uint256 _value) whenNotPaused public {
        super.burn(_value);
    }
}
