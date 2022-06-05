import { solution as subject } from './nesting'

describe('#nesting()', () => {
  describe.each([
    { input: '(()(())())', expected: true },
    { input: '())', expected: false }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns the sum of all the multiples of ${input[0]} or ${input[1]} below 1000: '${expected}'`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
