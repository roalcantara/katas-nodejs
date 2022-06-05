import { solution as subject } from './stone-wall'

describe('#stone_wall()', () => {
  describe.each([
    { input: [1, 1, 1], expected: 1 },
    { input: [1], expected: 1 },
    { input: [1, 2, 3, 3, 2, 1], expected: 3 },
    { input: [8, 8, 5, 7, 9, 8, 7, 4, 8], expected: 7 },
    { input: [3, 2, 1], expected: 3 },
    { input: [2, 3, 2, 1], expected: 3 },
    { input: [2, 5, 1, 4, 6, 7, 9, 10, 1], expected: 8 },
    { input: [4, 1, 2, 3, 1], expected: 4 }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
