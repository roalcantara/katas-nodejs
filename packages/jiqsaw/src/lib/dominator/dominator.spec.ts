import { solution as subject } from './dominator'

describe('#dominator()', () => {
  describe.each([
    { input: [3, 4, 3, 3, 3, -1, 3, 3], expected: 6 },
    { input: [1, 2, 3], expected: -1 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
