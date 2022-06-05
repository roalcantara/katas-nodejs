import { solution as subject } from './triangle'

describe('#triangle', () => {
  describe.each([
    { input: [10, 2, 5, 1, 8, 20], expected: 1 },
    { input: [10, 50, 5, 1], expected: 0 },
    { input: [5, 3, 3], expected: 1 },
    { input: [-2, -2, -2], expected: 0 }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
