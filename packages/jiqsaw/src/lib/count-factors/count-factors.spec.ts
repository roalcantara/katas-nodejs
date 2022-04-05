import { countFactors } from './count-factors'

describe('#countFactors()', () => {
  describe.each([
    { input: 780291637, expected: 2 },
    { input: 1, expected: 1 },
    { input: 7, expected: 2 },
    { input: 24, expected: 8 },
    { input: 19, expected: 2 },
    { input: 1111, expected: 4 },
    { input: 4, expected: 3 },
    { input: 42, expected: 8 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(countFactors(input)).toBe(expected)
    })
  })
})
