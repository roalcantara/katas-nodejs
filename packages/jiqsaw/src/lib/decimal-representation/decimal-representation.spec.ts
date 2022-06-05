import { solution as subject } from './decimal-representation'

describe('#decimalRepresentation()', () => {
  describe.each([
    { input: 17, A: [3, 5, 1], expected: 9 }
    // { input: [3, 5, 1], expected: 9 }
  ])("When '$input', '$A' is given", ({ input, A, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input, A)).toBe(expected)
    })
  })
})
