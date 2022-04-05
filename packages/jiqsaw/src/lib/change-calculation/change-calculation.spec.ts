import { changeCalculation } from './change-calculation'

describe('#changeCalculation()', () => {
  describe.each([
    { A: 5, B: 0.99, expected: [1, 0, 0, 0, 0, 4] },
    { A: 3, B: 1, expected: [0, 0, 0, 0, 0, 2] },
    { A: 10, B: 2.5, expected: [0, 0, 0, 0, 1, 7] }
  ])("When '$A' and '$B' is given", ({ A, B, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(changeCalculation(A, B)).toStrictEqual(expected)
    })
  })
})
