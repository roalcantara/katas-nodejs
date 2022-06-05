import { solution as subject } from './max-slice-sum'

describe('#maxSliceSum()', () => {
  describe.each([
    { input: [3, 2, -6, 4, 0], expected: 5 },
    { input: [-10], expected: -10 },
    { input: [1, 1, -2], expected: 2 },
    { input: [-2, 1], expected: 1 }
    // { input: [-2, -4, -1, -5, -3], expected: -2 },
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
