import { solution as subject } from './number-of-disc-intersections'

describe('#number-of-disc-intersections()', () => {
  describe.each([
    { input: [1, 5, 2, 1, 4, 0], expected: 11 },
    { input: [1, 5, 2, 1, 4, 0], expected: 11 }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns the value that occurs in odd number of '${input}': '${expected}'`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
