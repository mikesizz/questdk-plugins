export const VAULT_ABI = [
  {
    inputs: [
      { internalType: 'uint256', name: '_tokenId', type: 'uint256' },
      { internalType: 'bool', name: '_isLong', type: 'bool' },
      { internalType: 'enum OrderType', name: '_orderType', type: 'uint8' },
      { internalType: 'uint256[]', name: '_params', type: 'uint256[]' },
      { internalType: 'address', name: '_refer', type: 'address' },
    ],
    name: 'newPositionOrder',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'a', type: 'uint256' },
      { internalType: 'uint256', name: 'b', type: 'uint256' },
      { internalType: 'uint256', name: 'c', type: 'uint256' },
    ],
    name: 'newPositionOrderPacked',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]
