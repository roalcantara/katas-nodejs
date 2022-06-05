import { solution as subject } from './travel-favourite'

describe('#travel-favourite', () => {
  describe.each([
    {
      input: [
        [29, 50],
        [61, 37],
        [37, 70]
      ],
      expected: 3
    },
    {
      input: [
        [29, 29],
        [61, 61],
        [70, 70]
      ],
      expected: 8
    },
    { input: [[5], [5], [5]], expected: 0 }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input[0], input[1], input[2])).toEqual(expected)
    })
  })
})
