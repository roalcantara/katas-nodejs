import { solution as subject } from './fix-tree-pattern'

describe('#fixTreePattern()', () => {
  describe.each([
    { input: [1, 4, 1], expected: 0 },
    { input: [3, 7, 4, 5], expected: 0 },
    { input: [5, 4, 3, 2, 6], expected: 1 },
    { input: [5, 4, 3, 6, 5], expected: 1 },
    { input: [3, 5, 7, 8], expected: 1 },
    { input: [3, 5, 7, 6], expected: 1 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
