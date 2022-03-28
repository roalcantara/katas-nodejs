import { highAndLow as subject } from './high_and_low'

describe('#highest_and_lowests()', () => {
  describe('returns the highest and lowest number', () => {
    describe.each([
      { input: '8 3 -5 42 -1 0 0 -9 4 7 4 -4', expected: '42 -9' },
      { input: '1 2 3', expected: '3 1' }
    ])('When input is $input', ({ input, expected }) => {
      it(`returns ${expected}`, () => {
        expect(subject(input)).toBe(expected)
      })
    })
  })
})
