pragma solidity 0.4.24;

contract IForwarder {

  function callInt256(address _addr, string method, int256 nr);

  function callUint256(address _addr, string method, uint256 nr);

  function callStringUint256(address _addr, string method, string _str, uint256 nr);

  function callStringAddressUint256(address _addr, string method, string _str, address someAddr, uint256 nr);

  function callAddressUint256(address _addr, string method, address someAddr, uint256 nr);

  function callAddress(address _addr, string method, address someAddr);

  function callString(address _addr, string method, string someStr);

  function callStringStringUint256(address _addr, string method, string someStr1, string someString2, uint256 someNr);

}
