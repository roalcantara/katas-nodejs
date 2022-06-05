import { solution as subject } from './rabbits-in-forest'

describe('#rabbits-in-forest()', () => {
  describe.each([
    { input: [1, 1, 2], expected: 5 },
    { input: [10, 10, 10], expected: 11 },
    { input: [], expected: 0 }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
