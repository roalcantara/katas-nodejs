import { flipCards } from './flip-cards'

describe('#flipCards()', () => {
  describe.each([
    { A: [1, 2, 4, 3], B: [1, 3, 2, 3], expected: 2 },
    { A: [3, 2, 1, 6, 5], B: [4, 2, 1, 3, 3], expected: 3 },
    { A: [1, 2], B: [1, 2], expected: 3 }
  ])("When '$A' and '$B' is given", ({ A, B, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(flipCards(A, B)).toBe(expected)
    })
  })
})
