import { squareDigits as subject } from './square_every_digit'

describe('#squareDigits()', () => {
  describe.each([
    { input: 9119, expected: 811181 },
    { input: 0, expected: 0 }
  ])('Given the numbers $input', ({ input, expected }) => {
    it(`squares every digit of a number and concatenate them: ${expected}`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
