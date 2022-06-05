import { solution as subject } from './perm-missing-elements'

describe('#perm-missing-elements()', () => {
  describe.each([
    { input: [2, 3, 1, 5], expected: 4 },
    { input: [1], expected: 1 }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns the missing element '${expected}'`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
