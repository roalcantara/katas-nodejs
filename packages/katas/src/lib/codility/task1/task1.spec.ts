import { task1 } from './task1'

describe('#task1()', () => {
  describe.each([
    { A: [0, 4, -1, 0, 3], B: [0, -2, 5, 0, 3], expected: 2 },
    { A: [2, -2, -3, 3], B: [0, 0, 4, -4], expected: 1 },
    { A: [0, 4, -1, 0, 3], B: [0, -2, 5, 0, 3], expected: 2 },
    { A: [4, -1, 0, 3], B: [-2, 6, 0, 4], expected: 0 },
    { A: [1, 4, 2, -2, 5], B: [7, -2, -2, 2, 5], expected: 2 }
  ])("When '$input' is given", ({ A, B, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(task1(A, B)).toBe(expected)
    })
  })
})

// Example test:   ([0, 4, -1, 0, 3], [0, -2, 5, 0, 3])OK
// Example test:   ([2, -2, -3, 3], [0, 0, 4, -4]) OK
// Example test:   ([4, -1, 0, 3], [-2, 6, 0, 4]) OK
// Example test:   ([3, 2, 6], [4, 1, 6]) OK
// Example test:   ([1, 4, 2, -2, 5], [7, -2, -2, 2, 5]) OK
