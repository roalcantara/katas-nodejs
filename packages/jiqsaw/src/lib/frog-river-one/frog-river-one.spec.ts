import { solution as subject } from './frog-river-one'

describe('#frogRiverOne()', () => {
  describe.each([
    { input: 5, A: [1, 3, 1, 4, 2, 3, 5, 4], expected: 6 },
    { input: 5, A: [1, 3, 1, 4, 2, 3, 5, 4], expected: 6 }
  ])("When '$input' and '$A' is given", ({ input, A, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input, A)).toBe(expected)
    })
  })
})
