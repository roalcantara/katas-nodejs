import { addTwoNumbers } from './add-two-numbers'

describe('#addTwoNumbers()', () => {
  describe.each([
    { A: 20, B: 145, expected: 165 },
    { A: 98397, B: 37234226, expected: 37332623 }
  ])("When '$A' and '$B' is given", ({ A, B, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(addTwoNumbers(A, B)).toBe(expected)
    })
  })
})
