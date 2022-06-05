import { solution as subject } from './merge-sort-two-arrays-into-one'

describe('#mergeSortTwoArraysIntoOne()', () => {
  describe.each([
    { l1: [4, 5, 6, 8, 9, 10], l2: [1, 2, 3, 9], expected: [1, 2, 3, 4, 5, 6, 8, 9, 9, 10] },
    { l1: [1, 3, 4, 5], l2: [2, 4, 6, 8], expected: [1, 2, 3, 4, 4, 5, 6, 8] },
    { l1: [5, 8, 9], l2: [4, 7, 8], expected: [4, 5, 7, 8, 8, 9] }
  ])("When '$l1' and '$l2' are given", ({ l1, l2, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(l1, l2)).toStrictEqual(expected)
    })
  })
})
