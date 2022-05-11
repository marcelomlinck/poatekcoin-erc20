/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PoatekCoinERC20,
  PoatekCoinERC20Interface,
} from "../../contracts/PoatekCoinERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initialSupply",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "BurnedFrom",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "MintedTo",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "SignedUpNewWallet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "doesWalletExist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "newWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "walletExists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002bce38038062002bce8339818101604052810190620000379190620004c4565b6040518060400160405280600a81526020017f506f6174656b436f696e000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f574c4300000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000bb929190620003fd565b508060049080519060200190620000d4929190620003fd565b505050620000f7620000eb620001a360201b60201c565b620001ab60201b60201c565b6200010833620001ab60201b60201c565b62000144336200011d6200027160201b60201c565b600a6200012b919062000630565b836200013891906200076d565b6200027a60201b60201c565b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050620008c9565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002ed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002e49062000528565b60405180910390fd5b6200030160008383620003f360201b60201c565b806002600082825462000315919062000578565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200036c919062000578565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003d391906200054a565b60405180910390a3620003ef60008383620003f860201b60201c565b5050565b505050565b505050565b8280546200040b90620007e5565b90600052602060002090601f0160209004810192826200042f57600085556200047b565b82601f106200044a57805160ff19168380011785556200047b565b828001600101855582156200047b579182015b828111156200047a5782518255916020019190600101906200045d565b5b5090506200048a91906200048e565b5090565b5b80821115620004a95760008160009055506001016200048f565b5090565b600081519050620004be81620008af565b92915050565b600060208284031215620004d757600080fd5b6000620004e784828501620004ad565b91505092915050565b6000620004ff601f8362000567565b91506200050c8262000886565b602082019050919050565b6200052281620007ce565b82525050565b600060208201905081810360008301526200054381620004f0565b9050919050565b600060208201905062000561600083018462000517565b92915050565b600082825260208201905092915050565b60006200058582620007ce565b91506200059283620007ce565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620005ca57620005c96200081b565b5b828201905092915050565b6000808291508390505b60018511156200062757808604811115620005ff57620005fe6200081b565b5b60018516156200060f5780820291505b80810290506200061f8562000879565b9450620005df565b94509492505050565b60006200063d82620007ce565b91506200064a83620007d8565b9250620006797fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000681565b905092915050565b60008262000693576001905062000766565b81620006a3576000905062000766565b8160018114620006bc5760028114620006c757620006fd565b600191505062000766565b60ff841115620006dc57620006db6200081b565b5b8360020a915084821115620006f657620006f56200081b565b5b5062000766565b5060208310610133831016604e8410600b8410161715620007375782820a9050838111156200073157620007306200081b565b5b62000766565b620007468484846001620005d5565b9250905081840481111562000760576200075f6200081b565b5b81810290505b9392505050565b60006200077a82620007ce565b91506200078783620007ce565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615620007c357620007c26200081b565b5b828202905092915050565b6000819050919050565b600060ff82169050919050565b60006002820490506001821680620007fe57607f821691505b602082108114156200081557620008146200084a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60008160011c9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b620008ba81620007ce565b8114620008c657600080fd5b50565b6122f580620008d96000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063a457c2d711610071578063a457c2d71461031e578063a9059cbb1461034e578063b35571fb1461037e578063dd62ed3e1461039a578063f2fde38b146103ca57610121565b806370a0823114610278578063715018a6146102a85780637c2cb908146102b25780638da5cb5b146102e257806395d89b411461030057610121565b80632c03abe2116100f45780632c03abe2146101c2578063313ce567146101f2578063395093511461021057806340c10f1914610240578063470553211461025c57610121565b806306fdde0314610126578063095ea7b31461014457806318160ddd1461017457806323b872dd14610192575b600080fd5b61012e6103e6565b60405161013b9190611aca565b60405180910390f35b61015e600480360381019061015991906117d0565b610478565b60405161016b9190611aaf565b60405180910390f35b61017c61049b565b6040516101899190611cac565b60405180910390f35b6101ac60048036038101906101a79190611781565b6104a5565b6040516101b99190611aaf565b60405180910390f35b6101dc60048036038101906101d7919061171c565b6104d4565b6040516101e99190611aaf565b60405180910390f35b6101fa6104f4565b6040516102079190611cc7565b60405180910390f35b61022a600480360381019061022591906117d0565b6104fd565b6040516102379190611aaf565b60405180910390f35b61025a600480360381019061025591906117d0565b610534565b005b610276600480360381019061027191906117d0565b61068c565b005b610292600480360381019061028d919061171c565b6107e4565b60405161029f9190611cac565b60405180910390f35b6102b061082c565b005b6102cc60048036038101906102c7919061171c565b6108b4565b6040516102d99190611aaf565b60405180910390f35b6102ea610986565b6040516102f79190611a6b565b60405180910390f35b6103086109b0565b6040516103159190611aca565b60405180910390f35b610338600480360381019061033391906117d0565b610a42565b6040516103459190611aaf565b60405180910390f35b610368600480360381019061036391906117d0565b610ab9565b6040516103759190611aaf565b60405180910390f35b610398600480360381019061039391906117d0565b610adc565b005b6103b460048036038101906103af9190611745565b610c8c565b6040516103c19190611cac565b60405180910390f35b6103e460048036038101906103df919061171c565b610d13565b005b6060600380546103f590611e10565b80601f016020809104026020016040519081016040528092919081815260200182805461042190611e10565b801561046e5780601f106104435761010080835404028352916020019161046e565b820191906000526020600020905b81548152906001019060200180831161045157829003601f168201915b5050505050905090565b600080610483610e0b565b9050610490818585610e13565b600191505092915050565b6000600254905090565b6000806104b0610e0b565b90506104bd858285610fde565b6104c885858561106a565b60019150509392505050565b60066020528060005260406000206000915054906101000a900460ff1681565b60006012905090565b600080610508610e0b565b905061052981858561051a8589610c8c565b6105249190611cfe565b610e13565b600191505092915050565b61053c610e0b565b73ffffffffffffffffffffffffffffffffffffffff1661055a610986565b73ffffffffffffffffffffffffffffffffffffffff16146105b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a790611bcc565b60405180910390fd5b8160011515600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610644576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063b90611c4c565b60405180910390fd5b61064e83836112eb565b7f99dbff6288c84ae02a8b4165303576ec29421d3a2e283c8e1782da6bcc08e320838360405161067f929190611a86565b60405180910390a1505050565b610694610e0b565b73ffffffffffffffffffffffffffffffffffffffff166106b2610986565b73ffffffffffffffffffffffffffffffffffffffff1614610708576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106ff90611bcc565b60405180910390fd5b8160011515600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151461079c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079390611c4c565b60405180910390fd5b6107a6838361144b565b7f90661755d2353e7423b9bdb7828f782ab3f98690af4c792aecc173bd1eb5391c83836040516107d7929190611a86565b60405180910390a1505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610834610e0b565b73ffffffffffffffffffffffffffffffffffffffff16610852610986565b73ffffffffffffffffffffffffffffffffffffffff16146108a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089f90611bcc565b60405180910390fd5b6108b26000611622565b565b60006108be610e0b565b73ffffffffffffffffffffffffffffffffffffffff166108dc610986565b73ffffffffffffffffffffffffffffffffffffffff1614610932576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092990611bcc565b60405180910390fd5b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff169050919050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546109bf90611e10565b80601f01602080910402602001604051908101604052809291908181526020018280546109eb90611e10565b8015610a385780601f10610a0d57610100808354040283529160200191610a38565b820191906000526020600020905b815481529060010190602001808311610a1b57829003601f168201915b5050505050905090565b600080610a4d610e0b565b90506000610a5b8286610c8c565b905083811015610aa0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9790611c6c565b60405180910390fd5b610aad8286868403610e13565b60019250505092915050565b600080610ac4610e0b565b9050610ad181858561106a565b600191505092915050565b610ae4610e0b565b73ffffffffffffffffffffffffffffffffffffffff16610b02610986565b73ffffffffffffffffffffffffffffffffffffffff1614610b58576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b4f90611bcc565b60405180910390fd5b8160001515600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151514610bec576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be390611b0c565b60405180910390fd5b610bf683836112eb565b6001600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055507f7f7e4313ca9d535db2400fedb8e0485d204c394f010f9d534a84441e9f5394008383604051610c7f929190611a86565b60405180910390a1505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610d1b610e0b565b73ffffffffffffffffffffffffffffffffffffffff16610d39610986565b73ffffffffffffffffffffffffffffffffffffffff1614610d8f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8690611bcc565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610dff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610df690611b4c565b60405180910390fd5b610e0881611622565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e83576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7a90611c2c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ef3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eea90611b6c565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610fd19190611cac565b60405180910390a3505050565b6000610fea8484610c8c565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146110645781811015611056576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161104d90611b8c565b60405180910390fd5b6110638484848403610e13565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156110da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d190611c0c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561114a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114190611aec565b60405180910390fd5b6111558383836116e8565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156111db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111d290611bac565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461126e9190611cfe565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516112d29190611cac565b60405180910390a36112e58484846116ed565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561135b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161135290611c8c565b60405180910390fd5b611367600083836116e8565b80600260008282546113799190611cfe565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546113ce9190611cfe565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516114339190611cac565b60405180910390a3611447600083836116ed565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156114bb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114b290611bec565b60405180910390fd5b6114c7826000836116e8565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561154d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161154490611b2c565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546115a49190611d54565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516116099190611cac565b60405180910390a361161d836000846116ed565b505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b60008135905061170181612291565b92915050565b600081359050611716816122a8565b92915050565b60006020828403121561172e57600080fd5b600061173c848285016116f2565b91505092915050565b6000806040838503121561175857600080fd5b6000611766858286016116f2565b9250506020611777858286016116f2565b9150509250929050565b60008060006060848603121561179657600080fd5b60006117a4868287016116f2565b93505060206117b5868287016116f2565b92505060406117c686828701611707565b9150509250925092565b600080604083850312156117e357600080fd5b60006117f1858286016116f2565b925050602061180285828601611707565b9150509250929050565b61181581611d88565b82525050565b61182481611d9a565b82525050565b600061183582611ce2565b61183f8185611ced565b935061184f818560208601611ddd565b61185881611ea0565b840191505092915050565b6000611870602383611ced565b915061187b82611eb1565b604082019050919050565b6000611893602683611ced565b915061189e82611f00565b604082019050919050565b60006118b6602283611ced565b91506118c182611f4f565b604082019050919050565b60006118d9602683611ced565b91506118e482611f9e565b604082019050919050565b60006118fc602283611ced565b915061190782611fed565b604082019050919050565b600061191f601d83611ced565b915061192a8261203c565b602082019050919050565b6000611942602683611ced565b915061194d82612065565b604082019050919050565b6000611965602083611ced565b9150611970826120b4565b602082019050919050565b6000611988602183611ced565b9150611993826120dd565b604082019050919050565b60006119ab602583611ced565b91506119b68261212c565b604082019050919050565b60006119ce602483611ced565b91506119d98261217b565b604082019050919050565b60006119f1602683611ced565b91506119fc826121ca565b604082019050919050565b6000611a14602583611ced565b9150611a1f82612219565b604082019050919050565b6000611a37601f83611ced565b9150611a4282612268565b602082019050919050565b611a5681611dc6565b82525050565b611a6581611dd0565b82525050565b6000602082019050611a80600083018461180c565b92915050565b6000604082019050611a9b600083018561180c565b611aa86020830184611a4d565b9392505050565b6000602082019050611ac4600083018461181b565b92915050565b60006020820190508181036000830152611ae4818461182a565b905092915050565b60006020820190508181036000830152611b0581611863565b9050919050565b60006020820190508181036000830152611b2581611886565b9050919050565b60006020820190508181036000830152611b45816118a9565b9050919050565b60006020820190508181036000830152611b65816118cc565b9050919050565b60006020820190508181036000830152611b85816118ef565b9050919050565b60006020820190508181036000830152611ba581611912565b9050919050565b60006020820190508181036000830152611bc581611935565b9050919050565b60006020820190508181036000830152611be581611958565b9050919050565b60006020820190508181036000830152611c058161197b565b9050919050565b60006020820190508181036000830152611c258161199e565b9050919050565b60006020820190508181036000830152611c45816119c1565b9050919050565b60006020820190508181036000830152611c65816119e4565b9050919050565b60006020820190508181036000830152611c8581611a07565b9050919050565b60006020820190508181036000830152611ca581611a2a565b9050919050565b6000602082019050611cc16000830184611a4d565b92915050565b6000602082019050611cdc6000830184611a5c565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611d0982611dc6565b9150611d1483611dc6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611d4957611d48611e42565b5b828201905092915050565b6000611d5f82611dc6565b9150611d6a83611dc6565b925082821015611d7d57611d7c611e42565b5b828203905092915050565b6000611d9382611da6565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611dfb578082015181840152602081019050611de0565b83811115611e0a576000848401525b50505050565b60006002820490506001821680611e2857607f821691505b60208210811415611e3c57611e3b611e71565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f506f6174656b436f696e45524332303a2057616c6c657420616c72656164792060008201527f6578697374730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f506f6174656b436f696e45524332303a2057616c6c657420646f6573206e6f7460008201527f2065786973740000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61229a81611d88565b81146122a557600080fd5b50565b6122b181611dc6565b81146122bc57600080fd5b5056fea264697066735822122020306b6ab2b26645145e3a16d0412d3086315cb987c89f31f8175584c4a075e564736f6c63430008040033";

type PoatekCoinERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoatekCoinERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoatekCoinERC20__factory extends ContractFactory {
  constructor(...args: PoatekCoinERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoatekCoinERC20> {
    return super.deploy(
      _initialSupply,
      overrides || {}
    ) as Promise<PoatekCoinERC20>;
  }
  override getDeployTransaction(
    _initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_initialSupply, overrides || {});
  }
  override attach(address: string): PoatekCoinERC20 {
    return super.attach(address) as PoatekCoinERC20;
  }
  override connect(signer: Signer): PoatekCoinERC20__factory {
    return super.connect(signer) as PoatekCoinERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoatekCoinERC20Interface {
    return new utils.Interface(_abi) as PoatekCoinERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoatekCoinERC20 {
    return new Contract(address, _abi, signerOrProvider) as PoatekCoinERC20;
  }
}