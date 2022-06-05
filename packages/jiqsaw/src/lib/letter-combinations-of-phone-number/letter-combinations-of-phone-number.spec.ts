import { solution as subject } from './letter-combinations-of-phone-number'

describe('#letterCombinationsOfPhoneNumber()', () => {
  const expectation = [
    'adg',
    'adh',
    'adi',
    'aeg',
    'aeh',
    'aei',
    'afg',
    'afh',
    'afi',
    'bdg',
    'bdh',
    'bdi',
    'beg',
    'beh',
    'bei',
    'bfg',
    'bfh',
    'bfi',
    'cdg',
    'cdh',
    'cdi',
    'ceg',
    'ceh',
    'cei',
    'cfg',
    'cfh',
    'cfi'
  ]
  describe.each([
    { input: '234', expected: expectation },
    { input: '234', expected: expectation }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toStrictEqual(expected)
    })
  })
})
