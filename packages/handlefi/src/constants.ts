import type { Address } from 'viem'

// Chains
export const ARBITRUM_ONE = 42161

// Swap Contract Addresses
const AUGUSTUS_SWAPPER = '0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57'
const V2_ROUTER = '0x434b5245f6Fe54D0C9F881d55c2Ba27fe7132d89'
const HSPMHLP_CONTRACT = '0x69328f23A090e57378e3120f622ed0697f0E7ECF'
const HPSM2_CONTRACT = '0x0f330a53874cea3e5a0dee5d291c49275fdc3260'
const HLP_CURVE_CONTRACT = '0x559844b1Df66e247F83Ba58bc39fa488A1AF1093'
const HLP_BALANCER_CONTRACT = '0x9bDc4094860C97d9e5f1C18C4602a4a907d0a916'
const HANDLE_FRAX_BP = '0xab174ffa530c888649c44c4d21c849bbaabc723f'
const HANDLE_3POOL = '0xd0dd5d76cf0fc06dabc48632735566dca241a35e'

export const SWAP_CONTRACTS = [
  AUGUSTUS_SWAPPER,
  V2_ROUTER,
  HSPMHLP_CONTRACT,
  HPSM2_CONTRACT,
  HLP_CURVE_CONTRACT,
  HLP_BALANCER_CONTRACT,
  HANDLE_FRAX_BP,
  HANDLE_3POOL,
] as Address[]

// Token Addresses
export const WETH = '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
const FX_USD = '0x8616E8EA83f048ab9A5eC513c9412Dd2993bcE3F'
const FOREX = '0xdb298285fe4c5410b05390ca80e8fbe9de1f259b'
const ARB = '0x912CE59144191C1204E64559FE8253a0e49E6548'
const USDC = '0xaf88d065e77c8cC2239327C5EDb3A432268e5831'

export const TOKEN_ADDRESSES = [FX_USD, FOREX, ARB, USDC, WETH] as Address[]

// Paraswap Partner Address
export const PARASWAP_PARTNER = '0xFa2c1bE677BE4BEc8851D1577B343F7060B51E3A'
