import { solution as subject } from './max-product-of-three'

describe('#maxProductOfThree()', () => {
  describe.each([
    { input: [-3, 1, 2, -2, 5, 6], expected: 60 },
    { input: [-5, 5, -5, 4], expected: 125 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
