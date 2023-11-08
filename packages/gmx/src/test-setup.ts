import type { SwapActionParams } from '@rabbitholegg/questdk'
import { GreaterThanOrEqual } from '@rabbitholegg/questdk'
import { parseEther, parseUnits } from 'viem'
import { ETH_ADDRESS } from './contract-addresses'
import { type TestParams, createTestCase } from './utils'

const TOKENS_FOR_TOKENS_V1: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    from: '0xa91483BcA21D07fBb1B3Aa45a3B0bdf264C5B497',
    hash: '0x5abc3d2b70e3a49a455a2584692037cb3e73a3ab81ea10cfa857a1d63c2456c4',
    input:
      '0x6023e9660000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000012a05f20000000000000000000000000000000000000000000000000000000001290a3e74000000000000000000000000a91483bca21d07fbb1b3aa45a3b0bdf264c5b4970000000000000000000000000000000000000000000000000000000000000002000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc8000000000000000000000000af88d065e77c8cc2239327c5edb3a432268e5831',
    to: '0xaBBc5F99639c9B6bCb58544ddf04EFA6802F4064',
    value: '0',
  },
  params: {
    chainId: 42161,
    tokenIn: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', // USDC.e
    tokenOut: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', // USDC
    amountIn: GreaterThanOrEqual(parseUnits('5000', 6)),
    amountOut: GreaterThanOrEqual(parseUnits('4980', 6)),
    recipient: '0xa91483BcA21D07fBb1B3Aa45a3B0bdf264C5B497',
  },
}

const ETH_FOR_TOKENS_V1: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    from: '0x052C68ABE8e4BF0b78925E488B98f6fdc18A3AF9',
    hash: '0xd0a5257cc2a86c6e87b3b248fb45b53215756dfaa6893454d8ab0e83cba4b92c',
    input:
      '0xabe68eaa00000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000002250e77000000000000000000000000052c68abe8e4bf0b78925e488b98f6fdc18a3af9000000000000000000000000000000000000000000000000000000000000000200000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    to: '0xaBBc5F99639c9B6bCb58544ddf04EFA6802F4064',
    value: '19200000000000000',
  },
  params: {
    chainId: 42161,
    tokenIn: ETH_ADDRESS,
    tokenOut: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', // USDC.e
    amountIn: GreaterThanOrEqual(parseEther('0.0192')),
    amountOut: GreaterThanOrEqual(parseUnits('35.98', 6)),
    recipient: '0x052c68abe8e4bf0b78925e488b98f6fdc18a3af9',
  },
}

const TOKENS_FOR_ETH_V1: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    from: '0xDA63F22BF4bDC0B88536bDf4375fc9E14862ABD8',
    hash: '0x6a58fc08dbcb9589382ee33315c7d2c064663b0e1a2e132425865c4a34a17597',
    input:
      '0x2d4ba6a70000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000034e84400000000000000000000000000000000000000000000000007fdd30bd8482800000000000000000000000000da63f22bf4bdc0b88536bdf4375fc9e14862abd800000000000000000000000000000000000000000000000000000000000000020000000000000000000000002f2a2543b76a4166549f7aab2e75bef0aefc5b0f00000000000000000000000082af49447d8a07e3bd95bd0d56f35241523fbab1',
    to: '0xaBBc5F99639c9B6bCb58544ddf04EFA6802F4064',
    value: '0',
  },
  params: {
    chainId: 42161,
    tokenIn: '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', // WBTC
    tokenOut: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', // WETH
    amountIn: GreaterThanOrEqual(parseUnits('0.0346', 8)),
    amountOut: GreaterThanOrEqual(parseEther('.57')),
    recipient: '0xDA63F22BF4bDC0B88536bDf4375fc9E14862ABD8',
  },
}

export const passingTestCasesV1 = [
  createTestCase(TOKENS_FOR_TOKENS_V1, 'when swapping tokens for tokens'),
  createTestCase(TOKENS_FOR_ETH_V1, 'when swapping tokens for ETH'),
  createTestCase(ETH_FOR_TOKENS_V1, 'when swapping ETH for tokens'),
]

export const failingTestCasesV1 = [
  createTestCase(TOKENS_FOR_TOKENS_V1, 'when chainId is incorrect', {
    chainId: 10,
  }),
  createTestCase(TOKENS_FOR_ETH_V1, 'when tokenIn is incorrect', {
    tokenIn: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
  }),
  createTestCase(ETH_FOR_TOKENS_V1, 'when tokenOut is incorrect', {
    tokenOut: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
  }),
  createTestCase(ETH_FOR_TOKENS_V1, 'when amountIn is insufficient using ETH', {
    amountIn: GreaterThanOrEqual(parseEther('0.0193')),
  }),
  createTestCase(TOKENS_FOR_TOKENS_V1, 'when amountIn is insufficient', {
    amountIn: GreaterThanOrEqual(parseUnits('5001', 6)),
  }),
  createTestCase(TOKENS_FOR_ETH_V1, 'when amountOut is insufficient', {
    amountOut: GreaterThanOrEqual(parseEther('.58')),
  }),
  createTestCase(TOKENS_FOR_ETH_V1, 'when recipient is incorrect', {
    recipient: '0x052c68abe8e4bf0b78925e488b98f6fdc18a3af9',
  }),
]
