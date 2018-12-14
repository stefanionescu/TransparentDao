var daoCoin = {
  "contractName": "DAOCoin",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "mintingFinished",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finishMinting",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        },
        {
          "name": "_symbol",
          "type": "string"
        },
        {
          "name": "_decimals",
          "type": "uint256"
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
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "Mint",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "MintFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getName",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getSymbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getDecimals",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x60806040526000600360146101000a81548160ff0219169083151502179055503480156200002c57600080fd5b5060405162001ba438038062001ba483398101806040528101908080518201929190602001805182019291906020018051906020019092919050505033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260049080519060200190620000c1929190620000eb565b508160059080519060200190620000da929190620000eb565b50806006819055505050506200019a565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200012e57805160ff19168380011785556200015f565b828001600101855582156200015f579182015b828111156200015e57825182559160200191906001019062000141565b5b5090506200016e919062000172565b5090565b6200019791905b808211156200019357600081600090555060010162000179565b5090565b90565b6119fa80620001aa6000396000f3006080604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100f6578063095ea7b314610125578063150704011461018a57806317d7de7c1461021a57806318160ddd146102aa57806323b872dd146102d557806340c10f191461035a57806366188463146103bf57806370a0823114610424578063715018a61461047b5780637d64bcb4146104925780638da5cb5b146104c1578063a9059cbb14610518578063d73dd6231461057d578063dd62ed3e146105e2578063f0141d8414610659578063f2fde38b14610684575b600080fd5b34801561010257600080fd5b5061010b6106c7565b604051808215151515815260200191505060405180910390f35b34801561013157600080fd5b50610170600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106da565b604051808215151515815260200191505060405180910390f35b34801561019657600080fd5b5061019f6107cc565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101df5780820151818401526020810190506101c4565b50505050905090810190601f16801561020c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561022657600080fd5b5061022f61086e565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561026f578082015181840152602081019050610254565b50505050905090810190601f16801561029c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102b657600080fd5b506102bf610910565b6040518082815260200191505060405180910390f35b3480156102e157600080fd5b50610340600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061091a565b604051808215151515815260200191505060405180910390f35b34801561036657600080fd5b506103a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610cd5565b604051808215151515815260200191505060405180910390f35b3480156103cb57600080fd5b5061040a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ebb565b604051808215151515815260200191505060405180910390f35b34801561043057600080fd5b50610465600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061114d565b6040518082815260200191505060405180910390f35b34801561048757600080fd5b50610490611195565b005b34801561049e57600080fd5b506104a761129a565b604051808215151515815260200191505060405180910390f35b3480156104cd57600080fd5b506104d6611362565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561052457600080fd5b50610563600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611388565b604051808215151515815260200191505060405180910390f35b34801561058957600080fd5b506105c8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506115a8565b604051808215151515815260200191505060405180910390f35b3480156105ee57600080fd5b50610643600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506117a4565b6040518082815260200191505060405180910390f35b34801561066557600080fd5b5061066e61182b565b6040518082815260200191505060405180910390f35b34801561069057600080fd5b506106c5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611835565b005b600360149054906101000a900460ff1681565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b606060058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108645780601f1061083957610100808354040283529160200191610864565b820191906000526020600020905b81548152906001019060200180831161084757829003601f168201915b5050505050905090565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109065780601f106108db57610100808354040283529160200191610906565b820191906000526020600020905b8154815290600101906020018083116108e957829003601f168201915b5050505050905090565b6000600154905090565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561096957600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156109f457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610a3057600080fd5b610a81826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461189d90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b14826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610be582600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461189d90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d3357600080fd5b600360149054906101000a900460ff16151515610d4f57600080fd5b610d64826001546118b690919063ffffffff16565b600181905550610dbb826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083101515610fcd576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611061565b610fe0838261189d90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156111f157600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156112f857600080fd5b600360149054906101000a900460ff1615151561131457600080fd5b6001600360146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156113d757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561141357600080fd5b611464826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461189d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506114f7826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061163982600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118b690919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600654905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561189157600080fd5b61189a816118d2565b50565b60008282111515156118ab57fe5b818303905092915050565b600081830190508281101515156118c957fe5b80905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561190e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058206fe785ba964457a0f8bdd446de388cc5e6d8942a1d5ecdaace00e4146ce4864d0029",
  "deployedBytecode": "0x6080604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806305d2035b146100f6578063095ea7b314610125578063150704011461018a57806317d7de7c1461021a57806318160ddd146102aa57806323b872dd146102d557806340c10f191461035a57806366188463146103bf57806370a0823114610424578063715018a61461047b5780637d64bcb4146104925780638da5cb5b146104c1578063a9059cbb14610518578063d73dd6231461057d578063dd62ed3e146105e2578063f0141d8414610659578063f2fde38b14610684575b600080fd5b34801561010257600080fd5b5061010b6106c7565b604051808215151515815260200191505060405180910390f35b34801561013157600080fd5b50610170600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106da565b604051808215151515815260200191505060405180910390f35b34801561019657600080fd5b5061019f6107cc565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101df5780820151818401526020810190506101c4565b50505050905090810190601f16801561020c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561022657600080fd5b5061022f61086e565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561026f578082015181840152602081019050610254565b50505050905090810190601f16801561029c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3480156102b657600080fd5b506102bf610910565b6040518082815260200191505060405180910390f35b3480156102e157600080fd5b50610340600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061091a565b604051808215151515815260200191505060405180910390f35b34801561036657600080fd5b506103a5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610cd5565b604051808215151515815260200191505060405180910390f35b3480156103cb57600080fd5b5061040a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ebb565b604051808215151515815260200191505060405180910390f35b34801561043057600080fd5b50610465600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061114d565b6040518082815260200191505060405180910390f35b34801561048757600080fd5b50610490611195565b005b34801561049e57600080fd5b506104a761129a565b604051808215151515815260200191505060405180910390f35b3480156104cd57600080fd5b506104d6611362565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561052457600080fd5b50610563600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611388565b604051808215151515815260200191505060405180910390f35b34801561058957600080fd5b506105c8600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506115a8565b604051808215151515815260200191505060405180910390f35b3480156105ee57600080fd5b50610643600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506117a4565b6040518082815260200191505060405180910390f35b34801561066557600080fd5b5061066e61182b565b6040518082815260200191505060405180910390f35b34801561069057600080fd5b506106c5600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611835565b005b600360149054906101000a900460ff1681565b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b606060058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108645780601f1061083957610100808354040283529160200191610864565b820191906000526020600020905b81548152906001019060200180831161084757829003601f168201915b5050505050905090565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156109065780601f106108db57610100808354040283529160200191610906565b820191906000526020600020905b8154815290600101906020018083116108e957829003601f168201915b5050505050905090565b6000600154905090565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561096957600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156109f457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610a3057600080fd5b610a81826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461189d90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b14826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610be582600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461189d90919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d3357600080fd5b600360149054906101000a900460ff16151515610d4f57600080fd5b610d64826001546118b690919063ffffffff16565b600181905550610dbb826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff167f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885836040518082815260200191505060405180910390a28273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083101515610fcd576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611061565b610fe0838261189d90919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156111f157600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a26000600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156112f857600080fd5b600360149054906101000a900460ff1615151561131457600080fd5b6001600360146101000a81548160ff0219169083151502179055507fae5184fba832cb2b1f702aca6117b8d265eaf03ad33eb133f19dde0f5920fa0860405160405180910390a16001905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156113d757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561141357600080fd5b611464826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461189d90919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506114f7826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118b690919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b600061163982600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118b690919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000600654905090565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561189157600080fd5b61189a816118d2565b50565b60008282111515156118ab57fe5b818303905092915050565b600081830190508281101515156118c957fe5b80905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561190e57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505600a165627a7a723058206fe785ba964457a0f8bdd446de388cc5e6d8942a1d5ecdaace00e4146ce4864d0029",
  "sourceMap": "70:479:2:-;;;502:5:48;472:35;;;;;;;;;;;;;;;;;;;;158:134:2;8:9:-1;5:2;;;30:1;27;20:12;5:2;158:134:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;575:10:51;567:5;;:18;;;;;;;;;;;;;;;;;;233:5:2;226:4;:12;;;;;;;;;;;;:::i;:::-;;253:7;244:6;:16;;;;;;;;;;;;:::i;:::-;;277:9;266:8;:20;;;;158:134;;;70:479;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "70:479:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;472:35:48;;8:9:-1;5:2;;;30:1;27;20:12;5:2;472:35:48;;;;;;;;;;;;;;;;;;;;;;;;;;;1860:188:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1860:188:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;385:76:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;385:76:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;385:76:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;309:72;;8:9:-1;5:2;;;30:1;27;20:12;5:2;309:72:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;309:72:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;420:83:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;420:83:45;;;;;;;;;;;;;;;;;;;;;;;772:470:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;772:470:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;890:312:48;;8:9:-1;5:2;;;30:1;27;20:12;5:2;890:312:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3725:432:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3725:432:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1180:99:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1180:99:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1001:111:51;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1001:111:51;;;;;;1316:140:48;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1316:140:48;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:51;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:51;;;;;;;;;;;;;;;;;;;;;;;;;;;657:321:45;;8:9:-1;5:2;;;30:1;27;20:12;5:2;657:321:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2972:296:49;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2972:296:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2367:153;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2367:153:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;465:81:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;465:81:2;;;;;;;;;;;;;;;;;;;;;;;1274:103:51;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1274:103:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;472:35:48;;;;;;;;;;;;;:::o;1860:188:49:-;1927:4;1971:6;1939:7;:19;1947:10;1939:19;;;;;;;;;;;;;;;:29;1959:8;1939:29;;;;;;;;;;;;;;;:38;;;;2009:8;1988:38;;1997:10;1988:38;;;2019:6;1988:38;;;;;;;;;;;;;;;;;;2039:4;2032:11;;1860:188;;;;:::o;385:76:2:-;427:6;449;442:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;385:76;:::o;309:72::-;349:6;371:4;364:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;309:72;:::o;420:83:45:-;464:7;486:12;;479:19;;420:83;:::o;772:470:49:-;878:4;910:8;:15;919:5;910:15;;;;;;;;;;;;;;;;900:6;:25;;892:34;;;;;;;;950:7;:14;958:5;950:14;;;;;;;;;;;;;;;:26;965:10;950:26;;;;;;;;;;;;;;;;940:6;:36;;932:45;;;;;;;;1006:1;991:17;;:3;:17;;;;983:26;;;;;;;;1034:27;1054:6;1034:8;:15;1043:5;1034:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;1016:8;:15;1025:5;1016:15;;;;;;;;;;;;;;;:45;;;;1083:25;1101:6;1083:8;:13;1092:3;1083:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1067:8;:13;1076:3;1067:13;;;;;;;;;;;;;;;:41;;;;1143:38;1174:6;1143:7;:14;1151:5;1143:14;;;;;;;;;;;;;;;:26;1158:10;1143:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1114:7;:14;1122:5;1114:14;;;;;;;;;;;;;;;:26;1129:10;1114:26;;;;;;;;;;;;;;;:67;;;;1208:3;1192:28;;1201:5;1192:28;;;1213:6;1192:28;;;;;;;;;;;;;;;;;;1233:4;1226:11;;772:470;;;;;:::o;890:312:48:-;1004:4;636:5;;;;;;;;;;;622:19;;:10;:19;;;614:28;;;;;;;;547:15;;;;;;;;;;;546:16;538:25;;;;;;;;1033;1050:7;1033:12;;:16;;:25;;;;:::i;:::-;1018:12;:40;;;;1080:26;1098:7;1080:8;:13;1089:3;1080:13;;;;;;;;;;;;;;;;:17;;:26;;;;:::i;:::-;1064:8;:13;1073:3;1064:13;;;;;;;;;;;;;;;:42;;;;1122:3;1117:18;;;1127:7;1117:18;;;;;;;;;;;;;;;;;;1167:3;1146:34;;1163:1;1146:34;;;1172:7;1146:34;;;;;;;;;;;;;;;;;;1193:4;1186:11;;890:312;;;;:::o;3725:432:49:-;3831:4;3845:16;3864:7;:19;3872:10;3864:19;;;;;;;;;;;;;;;:29;3884:8;3864:29;;;;;;;;;;;;;;;;3845:48;;3923:8;3903:16;:28;;3899:165;;;3973:1;3941:7;:19;3949:10;3941:19;;;;;;;;;;;;;;;:29;3961:8;3941:29;;;;;;;;;;;;;;;:33;;;;3899:165;;;4027:30;4040:16;4027:8;:12;;:30;;;;:::i;:::-;3995:7;:19;4003:10;3995:19;;;;;;;;;;;;;;;:29;4015:8;3995:29;;;;;;;;;;;;;;;:62;;;;3899:165;4095:8;4074:61;;4083:10;4074:61;;;4105:7;:19;4113:10;4105:19;;;;;;;;;;;;;;;:29;4125:8;4105:29;;;;;;;;;;;;;;;;4074:61;;;;;;;;;;;;;;;;;;4148:4;4141:11;;3725:432;;;;;:::o;1180:99:45:-;1236:7;1258:8;:16;1267:6;1258:16;;;;;;;;;;;;;;;;1251:23;;1180:99;;;:::o;1001:111:51:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1077:5;;;;;;;;;;;1058:25;;;;;;;;;;;;1105:1;1089:5;;:18;;;;;;;;;;;;;;;;;;1001:111::o;1316:140:48:-;1375:4;719:5:51;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;547:15:48;;;;;;;;;;;546:16;538:25;;;;;;;;1405:4;1387:15;;:22;;;;;;;;;;;;;;;;;;1420:14;;;;;;;;;;1447:4;1440:11;;1316:140;:::o;238:20:51:-;;;;;;;;;;;;;:::o;657:321:45:-;720:4;750:8;:20;759:10;750:20;;;;;;;;;;;;;;;;740:6;:30;;732:39;;;;;;;;800:1;785:17;;:3;:17;;;;777:26;;;;;;;;833:32;858:6;833:8;:20;842:10;833:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;810:8;:20;819:10;810:20;;;;;;;;;;;;;;;:55;;;;887:25;905:6;887:8;:13;896:3;887:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;871:8;:13;880:3;871:13;;;;;;;;;;;;;;;:41;;;;944:3;923:33;;932:10;923:33;;;949:6;923:33;;;;;;;;;;;;;;;;;;969:4;962:11;;657:321;;;;:::o;2972:296:49:-;3073:4;3127:46;3161:11;3127:7;:19;3135:10;3127:19;;;;;;;;;;;;;;;:29;3147:8;3127:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;3087:7;:19;3095:10;3087:19;;;;;;;;;;;;;;;:29;3107:8;3087:29;;;;;;;;;;;;;;;:87;;;;3206:8;3185:61;;3194:10;3185:61;;;3216:7;:19;3224:10;3216:19;;;;;;;;;;;;;;;:29;3236:8;3216:29;;;;;;;;;;;;;;;;3185:61;;;;;;;;;;;;;;;;;;3259:4;3252:11;;2972:296;;;;:::o;2367:153::-;2466:7;2490;:15;2498:6;2490:15;;;;;;;;;;;;;;;:25;2506:8;2490:25;;;;;;;;;;;;;;;;2483:32;;2367:153;;;;:::o;465:81:2:-;509:7;532:8;;525:15;;465:81;:::o;1274:103:51:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1343:29;1362:9;1343:18;:29::i;:::-;1274:103;:::o;1060:116:50:-;1120:7;1148:2;1142;:8;;1135:16;;;;;;1169:2;1164;:7;1157:14;;1060:116;;;;:::o;1238:128::-;1298:9;1324:2;1319;:7;1315:11;;1344:2;1339:1;:7;;1332:15;;;;;;1360:1;1353:8;;1238:128;;;;:::o;1512:171:51:-;1603:1;1582:23;;:9;:23;;;;1574:32;;;;;;;;1645:9;1617:38;;1638:5;;;;;;;;;;;1617:38;;;;;;;;;;;;1669:9;1661:5;;:17;;;;;;;;;;;;;;;;;;1512:171;:::o",
  "source": "pragma solidity 0.4.24;\n\nimport \"contracts/interfaces/IDAOCoin.sol\";\n\ncontract DAOCoin is IDAOCoin {\n\n  string name;\n  string symbol;\n\n  uint256 decimals;\n\n  constructor(string _name, string _symbol, uint256 _decimals) {\n\n    name = _name;\n    symbol = _symbol;\n    decimals = _decimals;\n\n  }\n\n  //GETTERS\n\n  function getName() public view returns (string) {\n\n    return name;\n\n  }\n\n  function getSymbol() public view returns (string) {\n\n    return symbol;\n\n  }\n\n  function getDecimals() public view returns (uint256) {\n\n    return decimals;\n\n  }\n\n}\n",
  "sourcePath": "/home/stefan/Work/TransparentDao/contracts/accounting/dao/DAOCoin.sol",
  "ast": {
    "absolutePath": "/home/stefan/Work/TransparentDao/contracts/accounting/dao/DAOCoin.sol",
    "exportedSymbols": {
      "DAOCoin": [
        1075
      ]
    },
    "id": 1076,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1019,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "absolutePath": "contracts/interfaces/IDAOCoin.sol",
        "file": "contracts/interfaces/IDAOCoin.sol",
        "id": 1020,
        "nodeType": "ImportDirective",
        "scope": 1076,
        "sourceUnit": 12351,
        "src": "25:43:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1021,
              "name": "IDAOCoin",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12350,
              "src": "90:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                "typeString": "contract IDAOCoin"
              }
            },
            "id": 1022,
            "nodeType": "InheritanceSpecifier",
            "src": "90:8:2"
          }
        ],
        "contractDependencies": [
          12350,
          14165,
          14208,
          14240,
          14346,
          14593,
          14773
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1075,
        "linearizedBaseContracts": [
          1075,
          12350,
          14346,
          14773,
          14593,
          14165,
          14208,
          14240
        ],
        "name": "DAOCoin",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1024,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 1075,
            "src": "104:11:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1023,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "104:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1026,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 1075,
            "src": "119:13:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1025,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "119:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1028,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 1075,
            "src": "137:16:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1027,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "137:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1049,
              "nodeType": "Block",
              "src": "219:73:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1039,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1037,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1024,
                      "src": "226:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1038,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1030,
                      "src": "233:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "226:12:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1040,
                  "nodeType": "ExpressionStatement",
                  "src": "226:12:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1043,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1041,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1026,
                      "src": "244:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1042,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1032,
                      "src": "253:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "244:16:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1044,
                  "nodeType": "ExpressionStatement",
                  "src": "244:16:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1047,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1045,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1028,
                      "src": "266:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1046,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1034,
                      "src": "277:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "266:20:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1048,
                  "nodeType": "ExpressionStatement",
                  "src": "266:20:2"
                }
              ]
            },
            "documentation": null,
            "id": 1050,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1035,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1030,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 1050,
                  "src": "170:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1029,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "170:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1032,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 1050,
                  "src": "184:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1031,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "184:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1034,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 1050,
                  "src": "200:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1033,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "200:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "169:49:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1036,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "219:0:2"
            },
            "scope": 1075,
            "src": "158:134:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1057,
              "nodeType": "Block",
              "src": "357:24:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1055,
                    "name": "name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1024,
                    "src": "371:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 1054,
                  "id": 1056,
                  "nodeType": "Return",
                  "src": "364:11:2"
                }
              ]
            },
            "documentation": null,
            "id": 1058,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getName",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1051,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "325:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1053,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1058,
                  "src": "349:6:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1052,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "348:8:2"
            },
            "scope": 1075,
            "src": "309:72:2",
            "stateMutability": "view",
            "superFunction": 12339,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1065,
              "nodeType": "Block",
              "src": "435:26:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1063,
                    "name": "symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1026,
                    "src": "449:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 1062,
                  "id": 1064,
                  "nodeType": "Return",
                  "src": "442:13:2"
                }
              ]
            },
            "documentation": null,
            "id": 1066,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getSymbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1059,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "403:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1061,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1066,
                  "src": "427:6:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1060,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "426:8:2"
            },
            "scope": 1075,
            "src": "385:76:2",
            "stateMutability": "view",
            "superFunction": 12344,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1073,
              "nodeType": "Block",
              "src": "518:28:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1071,
                    "name": "decimals",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1028,
                    "src": "532:8:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1070,
                  "id": 1072,
                  "nodeType": "Return",
                  "src": "525:15:2"
                }
              ]
            },
            "documentation": null,
            "id": 1074,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getDecimals",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1067,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "485:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1070,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1069,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1074,
                  "src": "509:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1068,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "508:9:2"
            },
            "scope": 1075,
            "src": "465:81:2",
            "stateMutability": "view",
            "superFunction": 12349,
            "visibility": "public"
          }
        ],
        "scope": 1076,
        "src": "70:479:2"
      }
    ],
    "src": "0:550:2"
  },
  "legacyAST": {
    "absolutePath": "/home/stefan/Work/TransparentDao/contracts/accounting/dao/DAOCoin.sol",
    "exportedSymbols": {
      "DAOCoin": [
        1075
      ]
    },
    "id": 1076,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1019,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "absolutePath": "contracts/interfaces/IDAOCoin.sol",
        "file": "contracts/interfaces/IDAOCoin.sol",
        "id": 1020,
        "nodeType": "ImportDirective",
        "scope": 1076,
        "sourceUnit": 12351,
        "src": "25:43:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 1021,
              "name": "IDAOCoin",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 12350,
              "src": "90:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IDAOCoin_$12350",
                "typeString": "contract IDAOCoin"
              }
            },
            "id": 1022,
            "nodeType": "InheritanceSpecifier",
            "src": "90:8:2"
          }
        ],
        "contractDependencies": [
          12350,
          14165,
          14208,
          14240,
          14346,
          14593,
          14773
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1075,
        "linearizedBaseContracts": [
          1075,
          12350,
          14346,
          14773,
          14593,
          14165,
          14208,
          14240
        ],
        "name": "DAOCoin",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 1024,
            "name": "name",
            "nodeType": "VariableDeclaration",
            "scope": 1075,
            "src": "104:11:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1023,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "104:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1026,
            "name": "symbol",
            "nodeType": "VariableDeclaration",
            "scope": 1075,
            "src": "119:13:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 1025,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "119:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 1028,
            "name": "decimals",
            "nodeType": "VariableDeclaration",
            "scope": 1075,
            "src": "137:16:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 1027,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "137:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 1049,
              "nodeType": "Block",
              "src": "219:73:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1039,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1037,
                      "name": "name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1024,
                      "src": "226:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1038,
                      "name": "_name",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1030,
                      "src": "233:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "226:12:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1040,
                  "nodeType": "ExpressionStatement",
                  "src": "226:12:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1043,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1041,
                      "name": "symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1026,
                      "src": "244:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1042,
                      "name": "_symbol",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1032,
                      "src": "253:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "244:16:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 1044,
                  "nodeType": "ExpressionStatement",
                  "src": "244:16:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1047,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 1045,
                      "name": "decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1028,
                      "src": "266:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1046,
                      "name": "_decimals",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1034,
                      "src": "277:9:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "266:20:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1048,
                  "nodeType": "ExpressionStatement",
                  "src": "266:20:2"
                }
              ]
            },
            "documentation": null,
            "id": 1050,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1035,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1030,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 1050,
                  "src": "170:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1029,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "170:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1032,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 1050,
                  "src": "184:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1031,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "184:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1034,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 1050,
                  "src": "200:17:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1033,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "200:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "169:49:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1036,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "219:0:2"
            },
            "scope": 1075,
            "src": "158:134:2",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1057,
              "nodeType": "Block",
              "src": "357:24:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1055,
                    "name": "name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1024,
                    "src": "371:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 1054,
                  "id": 1056,
                  "nodeType": "Return",
                  "src": "364:11:2"
                }
              ]
            },
            "documentation": null,
            "id": 1058,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getName",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1051,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "325:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1053,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1058,
                  "src": "349:6:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1052,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "349:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "348:8:2"
            },
            "scope": 1075,
            "src": "309:72:2",
            "stateMutability": "view",
            "superFunction": 12339,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1065,
              "nodeType": "Block",
              "src": "435:26:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1063,
                    "name": "symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1026,
                    "src": "449:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "functionReturnParameters": 1062,
                  "id": 1064,
                  "nodeType": "Return",
                  "src": "442:13:2"
                }
              ]
            },
            "documentation": null,
            "id": 1066,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getSymbol",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1059,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "403:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1062,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1061,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1066,
                  "src": "427:6:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1060,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "426:8:2"
            },
            "scope": 1075,
            "src": "385:76:2",
            "stateMutability": "view",
            "superFunction": 12344,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1073,
              "nodeType": "Block",
              "src": "518:28:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1071,
                    "name": "decimals",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1028,
                    "src": "532:8:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1070,
                  "id": 1072,
                  "nodeType": "Return",
                  "src": "525:15:2"
                }
              ]
            },
            "documentation": null,
            "id": 1074,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getDecimals",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 1067,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "485:2:2"
            },
            "payable": false,
            "returnParameters": {
              "id": 1070,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1069,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 1074,
                  "src": "509:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1068,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "509:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "508:9:2"
            },
            "scope": 1075,
            "src": "465:81:2",
            "stateMutability": "view",
            "superFunction": 12349,
            "visibility": "public"
          }
        ],
        "scope": 1076,
        "src": "70:479:2"
      }
    ],
    "src": "0:550:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-12-14T17:21:44.514Z"
}

module.exports = {

  daoCoin

}