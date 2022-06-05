import { solution as subject } from './max-profit'

describe('#maxProfit()', () => {
  describe.each([
    { input: [23171, 21011, 21123, 21366, 21013, 21367], expected: 356 },
    { input: [6, 1, 3, 4, 2, 5], expected: 4 },
    { input: [], expected: 0 },
    { input: [8, 9, 3, 6, 1, 2], expected: 3 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
