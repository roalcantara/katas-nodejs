import { solution as subject } from './missing-integer'

describe('#missingInteger()', () => {
  describe.each([
    { input: [1, 3, 6, 4, 1, 2], expected: 5 },
    { input: [-1, -3], expected: 1 },
    { input: [1, 2, 3], expected: 4 },
    { input: [2], expected: 1 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns the smallest positive integer that does not occur in '${input}': '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
