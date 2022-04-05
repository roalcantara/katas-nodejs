import { chocolatesByNumbers } from './chocolates-by-numbers'

describe('#chocolatesByNumbers()', () => {
  describe.each([
    { A: 10, B: 4, expected: 5 },
    { A: 20, B: 5, expected: 4 },
    { A: 24, B: 18, expected: 4 }
  ])("When '$A' and '$B' is given", ({ A, B, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(chocolatesByNumbers(A, B)).toBe(expected)
    })
  })
})
