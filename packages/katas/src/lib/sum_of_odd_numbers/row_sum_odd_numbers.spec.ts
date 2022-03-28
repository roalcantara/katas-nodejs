import { rowSumOddNumbers as subject } from './row_sum_odd_numbers'

describe('#rowSumOddNumbers()', () => {
  describe('returns the highest and lowest number', () => {
    describe.each([
      { input: 1, expected: 1 },
      { input: 2, expected: 8 },
      { input: 13, expected: 2197 },
      { input: 19, expected: 6859 },
      { input: 41, expected: 68921 },
      { input: 42, expected: 74088 },
      { input: 74, expected: 405224 },
      { input: 86, expected: 636056 },
      { input: 93, expected: 804357 },
      { input: 101, expected: 1030301 }
    ])('Given the triangle of consecutive odd numbers $input', ({ input, expected }) => {
      it(`returns the sum of the numbers in the nth row of this triangle (starting at index 1): ${expected}`, () => {
        expect(subject(input)).toEqual(expected)
      })
    })
  })
})
