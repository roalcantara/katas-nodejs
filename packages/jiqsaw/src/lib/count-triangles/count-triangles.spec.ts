import { solution as subject } from './count-triangles'

describe('#countTriangles()', () => {
  describe.each([
    { input: [10, 2, 5, 1, 8, 12], expected: 3 }
    // { input: [10, 2, 5, 1, 8, 12], expected: 4 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
