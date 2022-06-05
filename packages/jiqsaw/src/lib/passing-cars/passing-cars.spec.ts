import { solution as subject } from './passing-cars'

describe('#passing-cars()', () => {
  describe.each([
    { input: [0, 1, 0, 1, 1], expected: 5 },
    { input: [0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1], expected: 22 },
    { input: [1], expected: 0 },
    { input: [1, 1], expected: 0 }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns the number of passing cars on the road: '${expected}'`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
