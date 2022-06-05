import { solution as subject } from './odd-occurence-in-array'

describe('#odd-occurence-in-array()', () => {
  describe.each([
    { input: [9, 3, 9, 3, 9, 7, 9], expected: 7 },
    { input: [9, 3, 9, 3, 9, 7, 9], expected: 7 }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns the value that occurs in odd number of '${input}': '${expected}'`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
