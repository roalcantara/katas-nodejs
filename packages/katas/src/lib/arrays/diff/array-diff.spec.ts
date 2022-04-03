import { arrayDiff as subject } from './array-diff'

describe('#arrayDiff()', () => {
  describe.each([
    { a: [], b: [4, 5], expected: [] },
    { a: [3, 4], b: [3], expected: [4] },
    { a: [1, 8, 2], b: [], expected: [1, 8, 2] },
    { a: [1, 2, 3], b: [1, 2], expected: [3] },
    { a: [1, 2, 2, 2, 3], b: [2], expected: [1, 3] }
  ])('When a is "$a" and b is "$b"', ({ a, b, expected }) => {
    it(`returns all values from a minus b: '[${expected}]'`, () => {
      expect(subject(a, b)).toEqual(expected)
    })
  })
})
