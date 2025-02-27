import { apply } from '@rabbitholegg/questdk/filter'
import { describe, expect, test } from 'vitest'
import { options, getSupportedTokenAddresses } from './Vela'
import { CHAIN_ID_ARRAY } from './chain-ids'
import { VAULT_ABI } from './abi'
import { passingTestCases, failingTestCases } from './test-transactions'

describe('Given the vela plugin', () => {
  describe('When handling the options action', () => {
    describe('should return a valid action filter', () => {
      test('when making an options action', async () => {
        const [testCase] = passingTestCases
        const filter = await options(testCase.params)
        expect(filter).to.deep.equal({
          chainId: 42161,
          to: '0xc4abade3a15064f9e3596943c699032748b13352',
          from: '0xa99f898530df1514a566f1a6562d62809e99557d',
          input: {
            $abi: VAULT_ABI,
            a: {
              $and: [
                {
                  $bitmask: {
                    bitmask:
                      '0xFFFF000000000000000000000000000000000000000000000000000000000000',
                    value:
                      '12367929453448690307083082505200429610792387278129332706851243409048338432',
                  },
                },
                {
                  $or: [
                    {
                      $bitmask: {
                        bitmask:
                          '0xFF000000000000000000000000000000000000000000000000000000000',
                        value: '0',
                      },
                    },
                    {
                      $bitmask: {
                        bitmask:
                          '0xFF000000000000000000000000000000000000000000000000000000000',
                        value:
                          '13803492693581127574869511724554050904902217944340773110325048447598592',
                      },
                    },
                  ],
                },
              ],
            },
            c: {
              $gte: '7445378188230133580578636410607088466657280000000000000000000000000000',
            },
          },
        })
      })
    })

    describe('should pass filter with valid transactions', () => {
      passingTestCases.forEach((testCase) => {
        const { transaction, description, params } = testCase
        test(description, async () => {
          const filter = await options(params)
          expect(apply(transaction, filter)).to.be.true
        })
      })
    })

    describe('should not pass filter with invalid transactions', () => {
      failingTestCases.forEach((testCase) => {
        const { transaction, description, params } = testCase
        test(description, async () => {
          const filter = await options(params)
          expect(apply(transaction, filter)).to.be.false
        })
      })
    })

    describe('should return a valid list of tokens for each supported chain', () => {
      CHAIN_ID_ARRAY.forEach((chainId) => {
        test(`for chainId: ${chainId}`, async () => {
          const tokens = await getSupportedTokenAddresses(chainId)
          const addressRegex = /^0x[a-fA-F0-9]{40}$/
          expect(tokens).to.be.an('array')
          expect(tokens).to.have.length.greaterThan(0)
          expect(tokens).to.have.length.lessThan(100)
          tokens.forEach((token) => {
            expect(token).to.match(
              addressRegex,
              `Token address ${token} is not a valid Ethereum address`,
            )
          })
        })
      })
    })
  })
})
