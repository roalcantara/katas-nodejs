import { solution as subject } from './distinct'

describe('#distinct()', () => {
  describe.each([
    { input: [2, 1, 1, 2, 3, 1], expected: 3 }
    // { input: [2, 1, 1, 2, 3, 1], expected: 3 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
