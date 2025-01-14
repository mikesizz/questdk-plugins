import type { MintActionParams } from '@rabbitholegg/questdk'
import { createTestCase, type TestParams, Chains } from './utils'

export const OP_COLLECT_ENTRY: TestParams<MintActionParams> = {
  transaction: {
    chainId: 10,
    from: '0x6e40dc97a419b42490923677bbc803e55338c26e',
    to: '0x05b52003e4b3ce431f467de89a1d0b82b663fc6b',
    hash: '0x5298ea426b854085b26e3625d3ba84e03420d554350c1f26da79178b8c2e9d3a',
    input:
      '0x434dcfba0000000000000000000000006e40dc97a419b42490923677bbc803e55338c26e000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    value: '690000000000000',
  },
  params: {
    chainId: Chains.OPTIMISM,
    contractAddress: '0x05b52003e4b3ce431f467de89a1d0b82b663fc6b',
    recipient: '0x6e40dc97a419b42490923677bbc803e55338c26e',
  },
}

export const ZORA_COLLECT_ENTRY: TestParams<MintActionParams> = {
  transaction: {
    chainId: 7777777,
    from: '0xfFB3b6E273986C6adC31A1F0146b8ea69e3c306C',
    to: '0x189950164e777796CDF8844E030c300A01e65d1c',
    hash: '0xaffb3da18ce604a3886403047dcae5402697128384becdb02b00f510217b2412',
    input:
      '0x434dcfba000000000000000000000000ffb3b6e273986c6adc31a1f0146b8ea69e3c306c000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
    value: '690000000000000',
  },
  params: {
    chainId: Chains.ZORA,
    contractAddress: '0x189950164e777796CDF8844E030c300A01e65d1c',
    recipient: '0xfFB3b6E273986C6adC31A1F0146b8ea69e3c306C',
  },
}

const OP_LEGACY_COLLECT: TestParams<MintActionParams> = {
  transaction: {
    chainId: 10,
    from: '0x8fa3232ff0a45de66f1810096189a0f6f4ea8724',
    to: '0xfe3faef720b4a278eb2ae484c17063ae56fab10a',
    hash: '0xf092b5c8e5a75c3b67c748484603f2491c6755ef0bb52178c03b58a946a978f9',
    input:
      '0x3a1b1d570000000000000000000000008fa3232ff0a45de66f1810096189a0f6f4ea872400000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000000',
    value: '0',
  },
  params: {
    chainId: Chains.OPTIMISM,
    contractAddress: '0xfe3faef720b4a278eb2ae484c17063ae56fab10a',
    recipient: '0x8fa3232ff0a45de66f1810096189a0f6f4ea8724',
  },
}

export const passingTestCases = [
  createTestCase(
    OP_COLLECT_ENTRY,
    'when collecting a mirror entry on optimism',
  ),
  createTestCase(ZORA_COLLECT_ENTRY, 'when collecting a mirror entry on zora'),
  createTestCase(
    OP_LEGACY_COLLECT,
    'when collecting a legacy mirror entry on optimism',
  ),
]

export const failingTestCases = [
  createTestCase(OP_COLLECT_ENTRY, 'when the chainId is incorrect', {
    chainId: Chains.ZORA,
  }),
  createTestCase(OP_COLLECT_ENTRY, 'when the contractAddress is incorrect', {
    contractAddress: '0x2ae28ce3c3997925403c0b3757ec4f4cf6b6cab4',
  }),
  createTestCase(OP_COLLECT_ENTRY, 'when the recipient is incorrect', {
    recipient: '0x1b4a302D15412655877d86ae82823D8F6d085ddD',
  }),
]
