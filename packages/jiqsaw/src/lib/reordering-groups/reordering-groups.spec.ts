import { solution as subject } from './reordering-groups'

describe('#reordering-groups()', () => {
  describe.each([
    { input: [1, 5, 4, 9, 8, 7, 12, 13, 14], expected: 6 },
    { input: [4, 3, 2, 6, 1], expected: 1 }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
