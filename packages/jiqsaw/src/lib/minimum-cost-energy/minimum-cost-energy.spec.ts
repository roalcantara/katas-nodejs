import { solution as subject } from './minimum-cost-energy'

describe('#minimumCostEnergy()', () => {
  describe.each([
    { A: [5, 3, 8, 3, 2], X: 2, Y: 5, expected: 7 }
    // { A: [4, 2, 7], X: 4, Y: 100, expected: 12 },
    // { A: [2, 2, 1, 2, 2], X: 2, Y: 3, expected: 8 },
    // { A: [4, 1, 5, 3], X: 5, Y: 2, expected: 4 }
  ])("When '$A', '$X' and '$Y' is given", ({ A, X, Y, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(A, X, Y)).toBe(expected)
    })
  })
})
