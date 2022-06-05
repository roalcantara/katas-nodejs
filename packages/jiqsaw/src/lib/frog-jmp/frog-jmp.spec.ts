import { solution as subject } from './frog-jmp'

describe('#frogJmp()', () => {
  describe.each([
    { X: 10, Y: 85, D: 30, expected: 3 },
    { X: 10, Y: 85, D: 30, expected: 3 }
  ])("When '$X', '$Y' and '$D' is given", ({ X, Y, D, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(X, Y, D)).toBe(expected)
    })
  })
})
