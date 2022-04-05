import { binaryGap } from './binary-gap'

describe('#binaryGap()', () => {
  describe.each([
    { input: 1041, expected: 5 },
    { input: 1041, expected: 5 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(binaryGap(input)).toBe(expected)
    })
  })
})
