import { solution as subject } from './tape-equilibrium'

describe('#tape-equilibrium', () => {
  describe.each([
    { input: [3, 1, 2, 4, 3], expected: 1 },
    { input: [-10, -5, -3, -4, -5], expected: 3 },
    { input: [-1000, 1000], expected: 2000 }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
