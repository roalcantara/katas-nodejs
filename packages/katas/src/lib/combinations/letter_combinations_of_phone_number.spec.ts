import { letterCombinationsOfPhoneNumber } from './letter_combinations_of_phone_number'

describe('#letterCombinationsOfPhoneNumber()', () => {
  describe.each([
    {
      input: 56,
      expected: ['jm', 'jn', 'jo', 'km', 'kn', 'ko', 'lm', 'ln', 'lo']
    },
    { input: 46, expected: ['gm', 'gn', 'go', 'hm', 'hn', 'ho', 'im', 'in', 'io'] }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(letterCombinationsOfPhoneNumber(input)).toStrictEqual(expected)
    })
  })
})
