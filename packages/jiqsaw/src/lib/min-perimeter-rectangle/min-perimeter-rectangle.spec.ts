import { solution as subject } from './min-perimeter-rectangle'

describe('#minPerimeterRectangle()', () => {
  describe.each([
    { input: 1, expected: 4 },
    { input: 30, expected: 22 }
    // { input: 982451653, expected: }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns the minimal perimeter of any rectangle whose area equals '${input}' : '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
