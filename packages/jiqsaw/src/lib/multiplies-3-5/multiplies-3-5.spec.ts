import { solution as subject } from './multiplies-3-5'

describe('#multiplies()', () => {
  describe.each([
    { input: [3, 5, 1000], expected: 233168 },
    { input: [3, 5, 1000], expected: 233168 }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns the sum of all the multiples of ${input[0]} or ${input[1]} below ${input[2]}: '${expected}'`, () => {
      expect(subject(input[0], input[1], input[3])).toEqual(expected)
    })
  })
})
