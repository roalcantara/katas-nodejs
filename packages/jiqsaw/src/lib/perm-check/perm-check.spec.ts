import { solution as subject } from './perm-check'

describe('#perm-check()', () => {
  describe.each([
    { input: [3, 2, 3, 2], expected: 0 },
    { input: [3, 2, 3, 2], expected: 0 }
  ])('When input is "$input"', ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
