var balanceSheet = {
  "contractName": "BalanceSheet",
  "abi": [
    {
      "inputs": [
        {
          "name": "_dao",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_asset",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "SetAssets",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_liabilities",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "SetLiabilities",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_equity",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "SetEquity",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_asset",
          "type": "bytes32"
        },
        {
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "setAssets",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_liabilities",
          "type": "bytes32"
        },
        {
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "setLiabilities",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_equity",
          "type": "bytes32"
        },
        {
          "name": "amount",
          "type": "int256"
        }
      ],
      "name": "setEquity",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_asset",
          "type": "bytes32"
        }
      ],
      "name": "getAsset",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_liability",
          "type": "bytes32"
        }
      ],
      "name": "getLiability",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_equity",
          "type": "bytes32"
        }
      ],
      "name": "getEquity",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getDao",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526102c860005561059060015561085860025561216060035534801561002857600080fd5b506040516020806106fa8339810180604052810190808051906020019092919050505080600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055504260048190555050610657806100a36000396000f300608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063011420b8146100885780632cc3ce80146100cd578063979042d4146101125780639e7a6a281461014d578063b70811bc14610192578063c29cad17146101e9578063ee87fbf214610224575b600080fd5b34801561009457600080fd5b506100b7600480360381019080803560001916906020019092919050505061025f565b6040518082815260200191505060405180910390f35b3480156100d957600080fd5b506100fc6004803603810190808035600019169060200190929190505050610284565b6040518082815260200191505060405180910390f35b34801561011e57600080fd5b5061014b6004803603810190808035600019169060200190929190803590602001909291905050506102a9565b005b34801561015957600080fd5b5061017c60048036038101908080356000191690602001909291905050506103ba565b6040518082815260200191505060405180910390f35b34801561019e57600080fd5b506101a76103df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101f557600080fd5b50610222600480360381019080803560001916906020019092919080359060200190929190505050610409565b005b34801561023057600080fd5b5061025d60048036038101908080356000191690602001909291908035906020019092919050505061051a565b005b6000600760008360001916600019168152602001908152602001600020549050919050565b6000600660008360001916600019168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561030557600080fd5b6000603c6018603c80600454420381151561031c57fe5b0481151561032657fe5b0481151561033057fe5b0481151561033a57fe5b049050600254811115151561034e57600080fd5b81600860008560001916600019168152602001908152602001600020819055507fb31623be2b574718b65d425443e6dbce0f58241b938a556616283e286c6b320983836040518083600019166000191681526020018281526020019250505060405180910390a1505050565b6000600860008360001916600019168152602001908152602001600020549050919050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046557600080fd5b6000603c6018603c80600454420381151561047c57fe5b0481151561048657fe5b0481151561049057fe5b0481151561049a57fe5b04905060025481111515156104ae57600080fd5b81600660008560001916600019168152602001908152602001600020819055507fd1d33b0fcf70e5e8521382ead155ed9179d4c80f5963c75cf428510faef9999783836040518083600019166000191681526020018281526020019250505060405180910390a1505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561057657600080fd5b6000603c6018603c80600454420381151561058d57fe5b0481151561059757fe5b048115156105a157fe5b048115156105ab57fe5b04905060025481111515156105bf57600080fd5b81600760008560001916600019168152602001908152602001600020819055507f6a676f68ea295cd2fd63fce9da70d159f6020d75b54ea936921df4f6317f4bbc83836040518083600019166000191681526020018281526020019250505060405180910390a15050505600a165627a7a7230582056995c358bca35ef9d232f0135e6740f04cb5a0132d3ed35d9129ac95e1773ff0029",
  "deployedBytecode": "0x608060405260043610610083576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063011420b8146100885780632cc3ce80146100cd578063979042d4146101125780639e7a6a281461014d578063b70811bc14610192578063c29cad17146101e9578063ee87fbf214610224575b600080fd5b34801561009457600080fd5b506100b7600480360381019080803560001916906020019092919050505061025f565b6040518082815260200191505060405180910390f35b3480156100d957600080fd5b506100fc6004803603810190808035600019169060200190929190505050610284565b6040518082815260200191505060405180910390f35b34801561011e57600080fd5b5061014b6004803603810190808035600019169060200190929190803590602001909291905050506102a9565b005b34801561015957600080fd5b5061017c60048036038101908080356000191690602001909291905050506103ba565b6040518082815260200191505060405180910390f35b34801561019e57600080fd5b506101a76103df565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156101f557600080fd5b50610222600480360381019080803560001916906020019092919080359060200190929190505050610409565b005b34801561023057600080fd5b5061025d60048036038101908080356000191690602001909291908035906020019092919050505061051a565b005b6000600760008360001916600019168152602001908152602001600020549050919050565b6000600660008360001916600019168152602001908152602001600020549050919050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561030557600080fd5b6000603c6018603c80600454420381151561031c57fe5b0481151561032657fe5b0481151561033057fe5b0481151561033a57fe5b049050600254811115151561034e57600080fd5b81600860008560001916600019168152602001908152602001600020819055507fb31623be2b574718b65d425443e6dbce0f58241b938a556616283e286c6b320983836040518083600019166000191681526020018281526020019250505060405180910390a1505050565b6000600860008360001916600019168152602001908152602001600020549050919050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561046557600080fd5b6000603c6018603c80600454420381151561047c57fe5b0481151561048657fe5b0481151561049057fe5b0481151561049a57fe5b04905060025481111515156104ae57600080fd5b81600660008560001916600019168152602001908152602001600020819055507fd1d33b0fcf70e5e8521382ead155ed9179d4c80f5963c75cf428510faef9999783836040518083600019166000191681526020018281526020019250505060405180910390a1505050565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561057657600080fd5b6000603c6018603c80600454420381151561058d57fe5b0481151561059757fe5b048115156105a157fe5b048115156105ab57fe5b04905060025481111515156105bf57600080fd5b81600760008560001916600019168152602001908152602001600020819055507f6a676f68ea295cd2fd63fce9da70d159f6020d75b54ea936921df4f6317f4bbc83836040518083600019166000191681526020018281526020019250505060405180910390a15050505600a165627a7a7230582056995c358bca35ef9d232f0135e6740f04cb5a0132d3ed35d9129ac95e1773ff0029",
  "sourceMap": "75:2175:3:-;;;150:3;134:19;;177:4;157:24;;203:4;185:22;;226:4;211:19;;628:71;8:9:-1;5:2;;;30:1;27;20:12;5:2;628:71:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;667:4;661:3;;:10;;;;;;;;;;;;;;;;;;690:3;678:9;:15;;;;628:71;75:2175;;;;;;",
  "deployedSourceMap": "75:2175:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1826:122;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1826:122:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1667:105;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1667:105:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1444:159;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1444:159:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2000:108;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2000:108:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2176:71;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2176:71:3;;;;;;;;;;;;;;;;;;;;;;;;;;;827:156;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:156:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1124:189;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1124:189:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1826:122;1889:6;1911:19;:31;1931:10;1911:31;;;;;;;;;;;;;;;;;;1904:38;;1826:122;;;:::o;1667:105::-;1722:6;1744:14;:22;1759:6;1744:22;;;;;;;;;;;;;;;;;;1737:29;;1667:105;;;:::o;1444:159::-;479:3;;;;;;;;;;;465:17;;:10;:17;;;457:26;;;;;;;;526:11;575:2;570;565;560;547:9;;541:3;:15;540:22;;;;;;;;:27;;;;;;;;:32;;;;;;;;:37;;;;;;;;526:51;;602:7;;592:6;:17;;584:26;;;;;;;;1553:6;1527:14;:23;1542:7;1527:23;;;;;;;;;;;;;;;;;:32;;;;1571:26;1581:7;1590:6;1571:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;489:1;1444:159;;:::o;2000:108::-;2057:6;2079:14;:23;2094:7;2079:23;;;;;;;;;;;;;;;;;;2072:30;;2000:108;;;:::o;2176:71::-;2215:7;2238:3;;;;;;;;;;;2231:10;;2176:71;:::o;827:156::-;479:3;;;;;;;;;;;465:17;;:10;:17;;;457:26;;;;;;;;526:11;575:2;570;565;560;547:9;;541:3;:15;540:22;;;;;;;;:27;;;;;;;;:32;;;;;;;;:37;;;;;;;;526:51;;602:7;;592:6;:17;;584:26;;;;;;;;934:6;909:14;:22;924:6;909:22;;;;;;;;;;;;;;;;;:31;;;;952:25;962:6;970;952:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;489:1;827:156;;:::o;1124:189::-;479:3;;;;;;;;;;;465:17;;:10;:17;;;457:26;;;;;;;;526:11;575:2;570;565;560;547:9;;541:3;:15;540:22;;;;;;;;:27;;;;;;;;:32;;;;;;;;:37;;;;;;;;526:51;;602:7;;592:6;:17;;584:26;;;;;;;;1253:6;1217:19;:33;1237:12;1217:33;;;;;;;;;;;;;;;;;:42;;;;1271:36;1286:12;1300:6;1271:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;489:1;1124:189;;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport \"contracts/interfaces/IBalanceSheet.sol\";\n\ncontract BalanceSheet is IBalanceSheet {\n\n  //Constants\n\n  uint256 month = 712;\n  uint256 twoMonths = 1424;\n  uint256 quarter = 2136;\n  uint256 year = 8544;\n\n  //Misscellanous\n\n  uint256 startTime;\n\n  address dao;\n\n  mapping(bytes32 => int256) detailedAssets;\n  mapping(bytes32 => int256) detailedLiabilities;\n  mapping(bytes32 => int256) detailedEquity;\n\n  modifier onlyDAO {\n\n    require(msg.sender == dao);\n    _;\n\n  }\n\n  modifier inQuarter {\n\n    uint _hours = (now - startTime) / 60 / 60 / 24 / 60;\n\n    require(_hours <= quarter);\n\n    _;\n\n  }\n\n  constructor(address _dao) {\n\n    dao = _dao;\n\n    startTime = now;\n\n  }\n\n  /**\n  * @notice Set an asset value\n  * @param _asset The asset to be updated\n  * @param amount The amount to be set\n  */\n\n  function setAssets(bytes32 _asset, int256 amount) public onlyDAO inQuarter {\n\n    detailedAssets[_asset] = amount;\n\n    emit SetAssets(_asset, amount);\n\n  }\n\n  /**\n  * @notice Set a liability value\n  * @param _liabilities The liability to be updated\n  * @param amount The amount to be set\n  */\n\n  function setLiabilities(bytes32 _liabilities, int256 amount) public onlyDAO inQuarter {\n\n    detailedLiabilities[_liabilities] = amount;\n\n    emit SetLiabilities(_liabilities, amount);\n\n  }\n\n  /**\n  * @notice Set an equity value\n  * @param _equity The equity to be updated\n  * @param amount The amount to be set\n  */\n\n  function setEquity(bytes32 _equity, int256 amount) public onlyDAO inQuarter {\n\n    detailedEquity[_equity] = amount;\n\n    emit SetEquity(_equity, amount);\n\n  }\n\n  //GETTERS\n\n  /**\n  * @dev Get the value of an asset\n  */\n\n  function getAsset(bytes32 _asset) public view returns (int256) {\n\n    return detailedAssets[_asset];\n\n  }\n\n  /**\n  * @dev Get the value of a liability\n  */\n\n  function getLiability(bytes32 _liability) public view returns (int256) {\n\n    return detailedLiabilities[_liability];\n\n  }\n\n  /**\n  * @dev Get the value of an equity\n  */\n\n  function getEquity(bytes32 _equity) public view returns (int256) {\n\n    return detailedEquity[_equity];\n\n  }\n\n  /**\n  * @dev Get the Dao controlling this balance sheet\n  */\n\n  function getDao() public view returns (address) {\n\n    return dao;\n\n  }\n\n}\n",
  "sourcePath": "/home/stefan/Work/TransparentDao/contracts/accounting/statements/BalanceSheet.sol",
  "ast": {
    "absolutePath": "/home/stefan/Work/TransparentDao/contracts/accounting/statements/BalanceSheet.sol",
    "exportedSymbols": {
      "BalanceSheet": [
        1916
      ]
    },
    "id": 1917,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1721,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:3"
      },
      {
        "absolutePath": "contracts/interfaces/IBalanceSheet.sol",
        "file": "contracts/interfaces/IBalanceSheet.sol",
        "id": 1722,
        "nodeType": "ImportDirective",
        "scope": 1917,
        "sourceUnit": 12871,
        "src": "25:48:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1723,
              "name": "IBalanceSheet",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12870,
              "src": "100:13:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IBalanceSheet_$12870",
                "typeString": "contract IBalanceSheet"
              }
            },
            "id": 1724,
            "nodeType": "InheritanceSpecifier",
            "src": "100:13:3"
          }
        ],
        "contractDependencies": [
          12870
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1916,
        "linearizedBaseContracts": [
          1916,
          12870
        ],
        "name": "BalanceSheet",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1727,
            "name": "month",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "134:19:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1725,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "134:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "373132",
              "id": 1726,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "150:3:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_712_by_1",
                "typeString": "int_const 712"
              },
              "value": "712"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1730,
            "name": "twoMonths",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "157:24:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1728,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "157:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31343234",
              "id": 1729,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "177:4:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1424_by_1",
                "typeString": "int_const 1424"
              },
              "value": "1424"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1733,
            "name": "quarter",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "185:22:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1731,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "185:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "32313336",
              "id": 1732,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "203:4:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2136_by_1",
                "typeString": "int_const 2136"
              },
              "value": "2136"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1736,
            "name": "year",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "211:19:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1734,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "211:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "38353434",
              "id": 1735,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "226:4:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_8544_by_1",
                "typeString": "int_const 8544"
              },
              "value": "8544"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1738,
            "name": "startTime",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "254:17:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1737,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "254:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1740,
            "name": "dao",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "276:11:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1739,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "276:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1744,
            "name": "detailedAssets",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "292:41:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
              "typeString": "mapping(bytes32 => int256)"
            },
            "typeName": {
              "id": 1743,
              "keyType": {
                "id": 1741,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "300:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "292:26:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                "typeString": "mapping(bytes32 => int256)"
              },
              "valueType": {
                "id": 1742,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "311:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1748,
            "name": "detailedLiabilities",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "337:46:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
              "typeString": "mapping(bytes32 => int256)"
            },
            "typeName": {
              "id": 1747,
              "keyType": {
                "id": 1745,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "345:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "337:26:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                "typeString": "mapping(bytes32 => int256)"
              },
              "valueType": {
                "id": 1746,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "356:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1752,
            "name": "detailedEquity",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "387:41:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
              "typeString": "mapping(bytes32 => int256)"
            },
            "typeName": {
              "id": 1751,
              "keyType": {
                "id": 1749,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "395:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "387:26:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                "typeString": "mapping(bytes32 => int256)"
              },
              "valueType": {
                "id": 1750,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "406:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1762,
              "nodeType": "Block",
              "src": "450:46:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1758,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1755,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15245,
                            "src": "465:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1756,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "465:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1757,
                          "name": "dao",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1740,
                          "src": "479:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "465:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1754,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        15248,
                        15249
                      ],
                      "referencedDeclaration": 15248,
                      "src": "457:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1759,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "457:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1760,
                  "nodeType": "ExpressionStatement",
                  "src": "457:26:3"
                },
                {
                  "id": 1761,
                  "nodeType": "PlaceholderStatement",
                  "src": "489:1:3"
                }
              ]
            },
            "documentation": null,
            "id": 1763,
            "name": "onlyDAO",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1753,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "450:0:3"
            },
            "src": "433:63:3",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1787,
              "nodeType": "Block",
              "src": "519:105:3",
              "statements": [
                {
                  "assignments": [
                    1766
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1766,
                      "name": "_hours",
                      "nodeType": "VariableDeclaration",
                      "scope": 1788,
                      "src": "526:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1765,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "526:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1779,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1776,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1774,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1772,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 1769,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 1767,
                                  "name": "now",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 15247,
                                  "src": "541:3:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 1768,
                                  "name": "startTime",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1738,
                                  "src": "547:9:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "541:15:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 1770,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "540:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3630",
                            "id": 1771,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "560:2:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_60_by_1",
                              "typeString": "int_const 60"
                            },
                            "value": "60"
                          },
                          "src": "540:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3630",
                          "id": 1773,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "565:2:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_60_by_1",
                            "typeString": "int_const 60"
                          },
                          "value": "60"
                        },
                        "src": "540:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3234",
                        "id": 1775,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "570:2:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_24_by_1",
                          "typeString": "int_const 24"
                        },
                        "value": "24"
                      },
                      "src": "540:32:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3630",
                      "id": 1777,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "575:2:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_60_by_1",
                        "typeString": "int_const 60"
                      },
                      "value": "60"
                    },
                    "src": "540:37:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "526:51:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1783,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1781,
                          "name": "_hours",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1766,
                          "src": "592:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1782,
                          "name": "quarter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1733,
                          "src": "602:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "592:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1780,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        15248,
                        15249
                      ],
                      "referencedDeclaration": 15248,
                      "src": "584:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1784,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "584:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1785,
                  "nodeType": "ExpressionStatement",
                  "src": "584:26:3"
                },
                {
                  "id": 1786,
                  "nodeType": "PlaceholderStatement",
                  "src": "617:1:3"
                }
              ]
            },
            "documentation": null,
            "id": 1788,
            "name": "inQuarter",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1764,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "519:0:3"
            },
            "src": "500:124:3",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1801,
              "nodeType": "Block",
              "src": "654:45:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1795,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1793,
                      "name": "dao",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1740,
                      "src": "661:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1794,
                      "name": "_dao",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1790,
                      "src": "667:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "661:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1796,
                  "nodeType": "ExpressionStatement",
                  "src": "661:10:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1797,
                      "name": "startTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1738,
                      "src": "678:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1798,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15247,
                      "src": "690:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "678:15:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1800,
                  "nodeType": "ExpressionStatement",
                  "src": "678:15:3"
                }
              ]
            },
            "documentation": null,
            "id": 1802,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1791,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1790,
                  "name": "_dao",
                  "nodeType": "VariableDeclaration",
                  "scope": 1802,
                  "src": "640:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1789,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "640:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "639:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1792,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "654:0:3"
            },
            "scope": 1916,
            "src": "628:71:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1824,
              "nodeType": "Block",
              "src": "902:81:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1817,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1813,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1744,
                        "src": "909:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                          "typeString": "mapping(bytes32 => int256)"
                        }
                      },
                      "id": 1815,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1814,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1804,
                        "src": "924:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "909:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1816,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1806,
                      "src": "934:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "909:31:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 1818,
                  "nodeType": "ExpressionStatement",
                  "src": "909:31:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1820,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1804,
                        "src": "962:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1821,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1806,
                        "src": "970:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 1819,
                      "name": "SetAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12810,
                      "src": "952:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_int256_$returns$__$",
                        "typeString": "function (bytes32,int256)"
                      }
                    },
                    "id": 1822,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "952:25:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1823,
                  "nodeType": "EmitStatement",
                  "src": "947:30:3"
                }
              ]
            },
            "documentation": "@notice Set an asset value\n@param _asset The asset to be updated\n@param amount The amount to be set",
            "id": 1825,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1809,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1808,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1763,
                  "src": "884:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "884:7:3"
              },
              {
                "arguments": null,
                "id": 1811,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1810,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1788,
                  "src": "892:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "892:9:3"
              }
            ],
            "name": "setAssets",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1804,
                  "name": "_asset",
                  "nodeType": "VariableDeclaration",
                  "scope": 1825,
                  "src": "846:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1803,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "846:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1806,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1825,
                  "src": "862:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1805,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "862:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "845:31:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1812,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "902:0:3"
            },
            "scope": 1916,
            "src": "827:156:3",
            "stateMutability": "nonpayable",
            "superFunction": 12829,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1847,
              "nodeType": "Block",
              "src": "1210:103:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1836,
                        "name": "detailedLiabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1748,
                        "src": "1217:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                          "typeString": "mapping(bytes32 => int256)"
                        }
                      },
                      "id": 1838,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1837,
                        "name": "_liabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1827,
                        "src": "1237:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1217:33:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1839,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1829,
                      "src": "1253:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1217:42:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 1841,
                  "nodeType": "ExpressionStatement",
                  "src": "1217:42:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1843,
                        "name": "_liabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1827,
                        "src": "1286:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1844,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1829,
                        "src": "1300:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 1842,
                      "name": "SetLiabilities",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12816,
                      "src": "1271:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_int256_$returns$__$",
                        "typeString": "function (bytes32,int256)"
                      }
                    },
                    "id": 1845,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1271:36:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1846,
                  "nodeType": "EmitStatement",
                  "src": "1266:41:3"
                }
              ]
            },
            "documentation": "@notice Set a liability value\n@param _liabilities The liability to be updated\n@param amount The amount to be set",
            "id": 1848,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1832,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1831,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1763,
                  "src": "1192:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1192:7:3"
              },
              {
                "arguments": null,
                "id": 1834,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1833,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1788,
                  "src": "1200:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1200:9:3"
              }
            ],
            "name": "setLiabilities",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1827,
                  "name": "_liabilities",
                  "nodeType": "VariableDeclaration",
                  "scope": 1848,
                  "src": "1148:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1826,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1148:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1829,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1848,
                  "src": "1170:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1828,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1170:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1147:37:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1835,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1210:0:3"
            },
            "scope": 1916,
            "src": "1124:189:3",
            "stateMutability": "nonpayable",
            "superFunction": 12836,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1870,
              "nodeType": "Block",
              "src": "1520:83:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1863,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1859,
                        "name": "detailedEquity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1752,
                        "src": "1527:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                          "typeString": "mapping(bytes32 => int256)"
                        }
                      },
                      "id": 1861,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1860,
                        "name": "_equity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1850,
                        "src": "1542:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1527:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1862,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1852,
                      "src": "1553:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1527:32:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 1864,
                  "nodeType": "ExpressionStatement",
                  "src": "1527:32:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1866,
                        "name": "_equity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1850,
                        "src": "1581:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1867,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1852,
                        "src": "1590:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 1865,
                      "name": "SetEquity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12822,
                      "src": "1571:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_int256_$returns$__$",
                        "typeString": "function (bytes32,int256)"
                      }
                    },
                    "id": 1868,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1571:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1869,
                  "nodeType": "EmitStatement",
                  "src": "1566:31:3"
                }
              ]
            },
            "documentation": "@notice Set an equity value\n@param _equity The equity to be updated\n@param amount The amount to be set",
            "id": 1871,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1855,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1854,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1763,
                  "src": "1502:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1502:7:3"
              },
              {
                "arguments": null,
                "id": 1857,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1856,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1788,
                  "src": "1510:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1510:9:3"
              }
            ],
            "name": "setEquity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1850,
                  "name": "_equity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1871,
                  "src": "1463:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1849,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1463:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1852,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1871,
                  "src": "1480:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1851,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1480:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1462:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1858,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1520:0:3"
            },
            "scope": 1916,
            "src": "1444:159:3",
            "stateMutability": "nonpayable",
            "superFunction": 12843,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1882,
              "nodeType": "Block",
              "src": "1730:42:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 1878,
                      "name": "detailedAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1744,
                      "src": "1744:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                        "typeString": "mapping(bytes32 => int256)"
                      }
                    },
                    "id": 1880,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 1879,
                      "name": "_asset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1873,
                      "src": "1759:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1744:22:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 1877,
                  "id": 1881,
                  "nodeType": "Return",
                  "src": "1737:29:3"
                }
              ]
            },
            "documentation": "@dev Get the value of an asset",
            "id": 1883,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAsset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1873,
                  "name": "_asset",
                  "nodeType": "VariableDeclaration",
                  "scope": 1883,
                  "src": "1685:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1872,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1685:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1684:16:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1877,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1876,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1883,
                  "src": "1722:6:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1875,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1722:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1721:8:3"
            },
            "scope": 1916,
            "src": "1667:105:3",
            "stateMutability": "view",
            "superFunction": 12855,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1894,
              "nodeType": "Block",
              "src": "1897:51:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 1890,
                      "name": "detailedLiabilities",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1748,
                      "src": "1911:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                        "typeString": "mapping(bytes32 => int256)"
                      }
                    },
                    "id": 1892,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 1891,
                      "name": "_liability",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1885,
                      "src": "1931:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1911:31:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 1889,
                  "id": 1893,
                  "nodeType": "Return",
                  "src": "1904:38:3"
                }
              ]
            },
            "documentation": "@dev Get the value of a liability",
            "id": 1895,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLiability",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1885,
                  "name": "_liability",
                  "nodeType": "VariableDeclaration",
                  "scope": 1895,
                  "src": "1848:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1884,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1848:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1847:20:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1889,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1888,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1895,
                  "src": "1889:6:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1887,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1889:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1888:8:3"
            },
            "scope": 1916,
            "src": "1826:122:3",
            "stateMutability": "view",
            "superFunction": 12862,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1906,
              "nodeType": "Block",
              "src": "2065:43:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 1902,
                      "name": "detailedEquity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1752,
                      "src": "2079:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                        "typeString": "mapping(bytes32 => int256)"
                      }
                    },
                    "id": 1904,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 1903,
                      "name": "_equity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1897,
                      "src": "2094:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2079:23:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 1901,
                  "id": 1905,
                  "nodeType": "Return",
                  "src": "2072:30:3"
                }
              ]
            },
            "documentation": "@dev Get the value of an equity",
            "id": 1907,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getEquity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1897,
                  "name": "_equity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1907,
                  "src": "2019:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1896,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2019:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2018:17:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1900,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1907,
                  "src": "2057:6:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1899,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2057:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2056:8:3"
            },
            "scope": 1916,
            "src": "2000:108:3",
            "stateMutability": "view",
            "superFunction": 12869,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1914,
              "nodeType": "Block",
              "src": "2224:23:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1912,
                    "name": "dao",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1740,
                    "src": "2238:3:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1911,
                  "id": 1913,
                  "nodeType": "Return",
                  "src": "2231:10:3"
                }
              ]
            },
            "documentation": "@dev Get the Dao controlling this balance sheet",
            "id": 1915,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getDao",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1908,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2191:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1910,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1915,
                  "src": "2215:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1909,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2215:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2214:9:3"
            },
            "scope": 1916,
            "src": "2176:71:3",
            "stateMutability": "view",
            "superFunction": 12848,
            "visibility": "public"
          }
        ],
        "scope": 1917,
        "src": "75:2175:3"
      }
    ],
    "src": "0:2251:3"
  },
  "legacyAST": {
    "absolutePath": "/home/stefan/Work/TransparentDao/contracts/accounting/statements/BalanceSheet.sol",
    "exportedSymbols": {
      "BalanceSheet": [
        1916
      ]
    },
    "id": 1917,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1721,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:3"
      },
      {
        "absolutePath": "contracts/interfaces/IBalanceSheet.sol",
        "file": "contracts/interfaces/IBalanceSheet.sol",
        "id": 1722,
        "nodeType": "ImportDirective",
        "scope": 1917,
        "sourceUnit": 12871,
        "src": "25:48:3",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1723,
              "name": "IBalanceSheet",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12870,
              "src": "100:13:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IBalanceSheet_$12870",
                "typeString": "contract IBalanceSheet"
              }
            },
            "id": 1724,
            "nodeType": "InheritanceSpecifier",
            "src": "100:13:3"
          }
        ],
        "contractDependencies": [
          12870
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1916,
        "linearizedBaseContracts": [
          1916,
          12870
        ],
        "name": "BalanceSheet",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1727,
            "name": "month",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "134:19:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1725,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "134:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "373132",
              "id": 1726,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "150:3:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_712_by_1",
                "typeString": "int_const 712"
              },
              "value": "712"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1730,
            "name": "twoMonths",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "157:24:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1728,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "157:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "31343234",
              "id": 1729,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "177:4:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1424_by_1",
                "typeString": "int_const 1424"
              },
              "value": "1424"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1733,
            "name": "quarter",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "185:22:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1731,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "185:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "32313336",
              "id": 1732,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "203:4:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_2136_by_1",
                "typeString": "int_const 2136"
              },
              "value": "2136"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1736,
            "name": "year",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "211:19:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1734,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "211:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "38353434",
              "id": 1735,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "226:4:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_rational_8544_by_1",
                "typeString": "int_const 8544"
              },
              "value": "8544"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1738,
            "name": "startTime",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "254:17:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1737,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "254:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1740,
            "name": "dao",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "276:11:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 1739,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "276:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1744,
            "name": "detailedAssets",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "292:41:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
              "typeString": "mapping(bytes32 => int256)"
            },
            "typeName": {
              "id": 1743,
              "keyType": {
                "id": 1741,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "300:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "292:26:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                "typeString": "mapping(bytes32 => int256)"
              },
              "valueType": {
                "id": 1742,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "311:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1748,
            "name": "detailedLiabilities",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "337:46:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
              "typeString": "mapping(bytes32 => int256)"
            },
            "typeName": {
              "id": 1747,
              "keyType": {
                "id": 1745,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "345:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "337:26:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                "typeString": "mapping(bytes32 => int256)"
              },
              "valueType": {
                "id": 1746,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "356:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1752,
            "name": "detailedEquity",
            "nodeType": "VariableDeclaration",
            "scope": 1916,
            "src": "387:41:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
              "typeString": "mapping(bytes32 => int256)"
            },
            "typeName": {
              "id": 1751,
              "keyType": {
                "id": 1749,
                "name": "bytes32",
                "nodeType": "ElementaryTypeName",
                "src": "395:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bytes32",
                  "typeString": "bytes32"
                }
              },
              "nodeType": "Mapping",
              "src": "387:26:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                "typeString": "mapping(bytes32 => int256)"
              },
              "valueType": {
                "id": 1750,
                "name": "int256",
                "nodeType": "ElementaryTypeName",
                "src": "406:6:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_int256",
                  "typeString": "int256"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1762,
              "nodeType": "Block",
              "src": "450:46:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 1758,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1755,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 15245,
                            "src": "465:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 1756,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "465:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1757,
                          "name": "dao",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1740,
                          "src": "479:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "465:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1754,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        15248,
                        15249
                      ],
                      "referencedDeclaration": 15248,
                      "src": "457:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1759,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "457:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1760,
                  "nodeType": "ExpressionStatement",
                  "src": "457:26:3"
                },
                {
                  "id": 1761,
                  "nodeType": "PlaceholderStatement",
                  "src": "489:1:3"
                }
              ]
            },
            "documentation": null,
            "id": 1763,
            "name": "onlyDAO",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1753,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "450:0:3"
            },
            "src": "433:63:3",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1787,
              "nodeType": "Block",
              "src": "519:105:3",
              "statements": [
                {
                  "assignments": [
                    1766
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1766,
                      "name": "_hours",
                      "nodeType": "VariableDeclaration",
                      "scope": 1788,
                      "src": "526:11:3",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1765,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "526:4:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1779,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1778,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "id": 1776,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1774,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1772,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 1769,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 1767,
                                  "name": "now",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 15247,
                                  "src": "541:3:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "-",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 1768,
                                  "name": "startTime",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 1738,
                                  "src": "547:9:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "src": "541:15:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 1770,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "540:17:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "/",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3630",
                            "id": 1771,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "560:2:3",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_60_by_1",
                              "typeString": "int_const 60"
                            },
                            "value": "60"
                          },
                          "src": "540:22:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "/",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "3630",
                          "id": 1773,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "565:2:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_60_by_1",
                            "typeString": "int_const 60"
                          },
                          "value": "60"
                        },
                        "src": "540:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "/",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3234",
                        "id": 1775,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "570:2:3",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_24_by_1",
                          "typeString": "int_const 24"
                        },
                        "value": "24"
                      },
                      "src": "540:32:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "/",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3630",
                      "id": 1777,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "575:2:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_60_by_1",
                        "typeString": "int_const 60"
                      },
                      "value": "60"
                    },
                    "src": "540:37:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "526:51:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1783,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1781,
                          "name": "_hours",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1766,
                          "src": "592:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 1782,
                          "name": "quarter",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1733,
                          "src": "602:7:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "592:17:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 1780,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        15248,
                        15249
                      ],
                      "referencedDeclaration": 15248,
                      "src": "584:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1784,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "584:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1785,
                  "nodeType": "ExpressionStatement",
                  "src": "584:26:3"
                },
                {
                  "id": 1786,
                  "nodeType": "PlaceholderStatement",
                  "src": "617:1:3"
                }
              ]
            },
            "documentation": null,
            "id": 1788,
            "name": "inQuarter",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 1764,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "519:0:3"
            },
            "src": "500:124:3",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1801,
              "nodeType": "Block",
              "src": "654:45:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1795,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1793,
                      "name": "dao",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1740,
                      "src": "661:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1794,
                      "name": "_dao",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1790,
                      "src": "667:4:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "661:10:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 1796,
                  "nodeType": "ExpressionStatement",
                  "src": "661:10:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1799,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1797,
                      "name": "startTime",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1738,
                      "src": "678:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1798,
                      "name": "now",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 15247,
                      "src": "690:3:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "678:15:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1800,
                  "nodeType": "ExpressionStatement",
                  "src": "678:15:3"
                }
              ]
            },
            "documentation": null,
            "id": 1802,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1791,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1790,
                  "name": "_dao",
                  "nodeType": "VariableDeclaration",
                  "scope": 1802,
                  "src": "640:12:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1789,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "640:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "639:14:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1792,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "654:0:3"
            },
            "scope": 1916,
            "src": "628:71:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1824,
              "nodeType": "Block",
              "src": "902:81:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1817,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1813,
                        "name": "detailedAssets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1744,
                        "src": "909:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                          "typeString": "mapping(bytes32 => int256)"
                        }
                      },
                      "id": 1815,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1814,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1804,
                        "src": "924:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "909:22:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1816,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1806,
                      "src": "934:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "909:31:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 1818,
                  "nodeType": "ExpressionStatement",
                  "src": "909:31:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1820,
                        "name": "_asset",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1804,
                        "src": "962:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1821,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1806,
                        "src": "970:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 1819,
                      "name": "SetAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12810,
                      "src": "952:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_int256_$returns$__$",
                        "typeString": "function (bytes32,int256)"
                      }
                    },
                    "id": 1822,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "952:25:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1823,
                  "nodeType": "EmitStatement",
                  "src": "947:30:3"
                }
              ]
            },
            "documentation": "@notice Set an asset value\n@param _asset The asset to be updated\n@param amount The amount to be set",
            "id": 1825,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1809,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1808,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1763,
                  "src": "884:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "884:7:3"
              },
              {
                "arguments": null,
                "id": 1811,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1810,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1788,
                  "src": "892:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "892:9:3"
              }
            ],
            "name": "setAssets",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1807,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1804,
                  "name": "_asset",
                  "nodeType": "VariableDeclaration",
                  "scope": 1825,
                  "src": "846:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1803,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "846:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1806,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1825,
                  "src": "862:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1805,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "862:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "845:31:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1812,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "902:0:3"
            },
            "scope": 1916,
            "src": "827:156:3",
            "stateMutability": "nonpayable",
            "superFunction": 12829,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1847,
              "nodeType": "Block",
              "src": "1210:103:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1840,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1836,
                        "name": "detailedLiabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1748,
                        "src": "1217:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                          "typeString": "mapping(bytes32 => int256)"
                        }
                      },
                      "id": 1838,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1837,
                        "name": "_liabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1827,
                        "src": "1237:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1217:33:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1839,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1829,
                      "src": "1253:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1217:42:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 1841,
                  "nodeType": "ExpressionStatement",
                  "src": "1217:42:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1843,
                        "name": "_liabilities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1827,
                        "src": "1286:12:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1844,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1829,
                        "src": "1300:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 1842,
                      "name": "SetLiabilities",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12816,
                      "src": "1271:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_int256_$returns$__$",
                        "typeString": "function (bytes32,int256)"
                      }
                    },
                    "id": 1845,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1271:36:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1846,
                  "nodeType": "EmitStatement",
                  "src": "1266:41:3"
                }
              ]
            },
            "documentation": "@notice Set a liability value\n@param _liabilities The liability to be updated\n@param amount The amount to be set",
            "id": 1848,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1832,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1831,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1763,
                  "src": "1192:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1192:7:3"
              },
              {
                "arguments": null,
                "id": 1834,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1833,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1788,
                  "src": "1200:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1200:9:3"
              }
            ],
            "name": "setLiabilities",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1830,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1827,
                  "name": "_liabilities",
                  "nodeType": "VariableDeclaration",
                  "scope": 1848,
                  "src": "1148:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1826,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1148:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1829,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1848,
                  "src": "1170:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1828,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1170:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1147:37:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1835,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1210:0:3"
            },
            "scope": 1916,
            "src": "1124:189:3",
            "stateMutability": "nonpayable",
            "superFunction": 12836,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1870,
              "nodeType": "Block",
              "src": "1520:83:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1863,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1859,
                        "name": "detailedEquity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1752,
                        "src": "1527:14:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                          "typeString": "mapping(bytes32 => int256)"
                        }
                      },
                      "id": 1861,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1860,
                        "name": "_equity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1850,
                        "src": "1542:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1527:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1862,
                      "name": "amount",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1852,
                      "src": "1553:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_int256",
                        "typeString": "int256"
                      }
                    },
                    "src": "1527:32:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "id": 1864,
                  "nodeType": "ExpressionStatement",
                  "src": "1527:32:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1866,
                        "name": "_equity",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1850,
                        "src": "1581:7:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1867,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1852,
                        "src": "1590:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_int256",
                          "typeString": "int256"
                        }
                      ],
                      "id": 1865,
                      "name": "SetEquity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12822,
                      "src": "1571:9:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_bytes32_$_t_int256_$returns$__$",
                        "typeString": "function (bytes32,int256)"
                      }
                    },
                    "id": 1868,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1571:26:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1869,
                  "nodeType": "EmitStatement",
                  "src": "1566:31:3"
                }
              ]
            },
            "documentation": "@notice Set an equity value\n@param _equity The equity to be updated\n@param amount The amount to be set",
            "id": 1871,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 1855,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1854,
                  "name": "onlyDAO",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1763,
                  "src": "1502:7:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1502:7:3"
              },
              {
                "arguments": null,
                "id": 1857,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 1856,
                  "name": "inQuarter",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1788,
                  "src": "1510:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1510:9:3"
              }
            ],
            "name": "setEquity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1853,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1850,
                  "name": "_equity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1871,
                  "src": "1463:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1849,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1463:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1852,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "scope": 1871,
                  "src": "1480:13:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1851,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1480:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1462:32:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1858,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1520:0:3"
            },
            "scope": 1916,
            "src": "1444:159:3",
            "stateMutability": "nonpayable",
            "superFunction": 12843,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1882,
              "nodeType": "Block",
              "src": "1730:42:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 1878,
                      "name": "detailedAssets",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1744,
                      "src": "1744:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                        "typeString": "mapping(bytes32 => int256)"
                      }
                    },
                    "id": 1880,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 1879,
                      "name": "_asset",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1873,
                      "src": "1759:6:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1744:22:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 1877,
                  "id": 1881,
                  "nodeType": "Return",
                  "src": "1737:29:3"
                }
              ]
            },
            "documentation": "@dev Get the value of an asset",
            "id": 1883,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAsset",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1873,
                  "name": "_asset",
                  "nodeType": "VariableDeclaration",
                  "scope": 1883,
                  "src": "1685:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1872,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1685:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1684:16:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1877,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1876,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1883,
                  "src": "1722:6:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1875,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1722:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1721:8:3"
            },
            "scope": 1916,
            "src": "1667:105:3",
            "stateMutability": "view",
            "superFunction": 12855,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1894,
              "nodeType": "Block",
              "src": "1897:51:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 1890,
                      "name": "detailedLiabilities",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1748,
                      "src": "1911:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                        "typeString": "mapping(bytes32 => int256)"
                      }
                    },
                    "id": 1892,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 1891,
                      "name": "_liability",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1885,
                      "src": "1931:10:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1911:31:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 1889,
                  "id": 1893,
                  "nodeType": "Return",
                  "src": "1904:38:3"
                }
              ]
            },
            "documentation": "@dev Get the value of a liability",
            "id": 1895,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getLiability",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1886,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1885,
                  "name": "_liability",
                  "nodeType": "VariableDeclaration",
                  "scope": 1895,
                  "src": "1848:18:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1884,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "1848:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1847:20:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1889,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1888,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1895,
                  "src": "1889:6:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1887,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1889:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1888:8:3"
            },
            "scope": 1916,
            "src": "1826:122:3",
            "stateMutability": "view",
            "superFunction": 12862,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1906,
              "nodeType": "Block",
              "src": "2065:43:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 1902,
                      "name": "detailedEquity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1752,
                      "src": "2079:14:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_bytes32_$_t_int256_$",
                        "typeString": "mapping(bytes32 => int256)"
                      }
                    },
                    "id": 1904,
                    "indexExpression": {
                      "argumentTypes": null,
                      "id": 1903,
                      "name": "_equity",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1897,
                      "src": "2094:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bytes32",
                        "typeString": "bytes32"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "2079:23:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "functionReturnParameters": 1901,
                  "id": 1905,
                  "nodeType": "Return",
                  "src": "2072:30:3"
                }
              ]
            },
            "documentation": "@dev Get the value of an equity",
            "id": 1907,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getEquity",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1898,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1897,
                  "name": "_equity",
                  "nodeType": "VariableDeclaration",
                  "scope": 1907,
                  "src": "2019:15:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes32",
                    "typeString": "bytes32"
                  },
                  "typeName": {
                    "id": 1896,
                    "name": "bytes32",
                    "nodeType": "ElementaryTypeName",
                    "src": "2019:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes32",
                      "typeString": "bytes32"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2018:17:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1901,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1900,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1907,
                  "src": "2057:6:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_int256",
                    "typeString": "int256"
                  },
                  "typeName": {
                    "id": 1899,
                    "name": "int256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2057:6:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_int256",
                      "typeString": "int256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2056:8:3"
            },
            "scope": 1916,
            "src": "2000:108:3",
            "stateMutability": "view",
            "superFunction": 12869,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1914,
              "nodeType": "Block",
              "src": "2224:23:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1912,
                    "name": "dao",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1740,
                    "src": "2238:3:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "functionReturnParameters": 1911,
                  "id": 1913,
                  "nodeType": "Return",
                  "src": "2231:10:3"
                }
              ]
            },
            "documentation": "@dev Get the Dao controlling this balance sheet",
            "id": 1915,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getDao",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1908,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2191:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 1911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1910,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1915,
                  "src": "2215:7:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1909,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2215:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2214:9:3"
            },
            "scope": 1916,
            "src": "2176:71:3",
            "stateMutability": "view",
            "superFunction": 12848,
            "visibility": "public"
          }
        ],
        "scope": 1917,
        "src": "75:2175:3"
      }
    ],
    "src": "0:2251:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-20T23:25:27.031Z"
}

module.exports = {

  balanceSheet

}
