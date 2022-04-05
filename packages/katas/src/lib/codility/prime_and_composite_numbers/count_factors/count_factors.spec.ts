import { countFactors } from './count_factors'

describe('#countFactors()', () => {
  describe.each([
    { input: 24, expected: 8 },
    { input: 24, expected: 8 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(countFactors(input)).toBe(expected)
    })
  })
})
