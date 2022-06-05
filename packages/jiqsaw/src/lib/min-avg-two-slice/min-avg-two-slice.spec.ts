import { solution as subject } from './min-avg-two-slice'

describe('#minAvgTwoSlice()', () => {
  describe.each([
    { input: [4, 2, 2, 5, 1, 5, 8], expected: 1 },
    { input: [10, 10, -1, 2, 4, -1, 2, -1], expected: 5 },
    { input: [-3, -5, -8, -4, -10], expected: 2 },
    { input: [5, 6, 3, 4, 9], expected: 2 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns the minimal average of any slice containing at least two elements: '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
