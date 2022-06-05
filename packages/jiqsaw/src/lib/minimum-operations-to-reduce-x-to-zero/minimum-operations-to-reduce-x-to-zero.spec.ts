import { solution as subject } from './minimum-operations-to-reduce-x-to-zero'

describe('#minimumOperationsToReduceXToZero()', () => {
  describe.each([
    { nums: [1, 1, 4, 2, 3], x: 5, expected: 2 },
    { nums: [5, 6, 7, 8, 9], x: 4, expected: -1 },
    { nums: [3, 2, 20, 1, 1, 3], x: 10, expected: 5 }
  ])("When '$nums' and '$x' are given", ({ nums, x, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(nums, x)).toBe(expected)
    })
  })
})
