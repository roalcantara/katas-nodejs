import { solution as subject } from './palindromes'

describe('#palindromes()', () => {
  describe.each([
    { input: 10000, expected: 55044945 },
    { input: 10000, expected: 55044945 }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns the sum of all numeric palindromes that are less than '${input}': '${expected}'`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
