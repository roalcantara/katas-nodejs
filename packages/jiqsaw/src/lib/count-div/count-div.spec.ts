import { countDiv } from './count-div'

describe('#countDiv()', () => {
  describe.each([
    { A: 6, B: 11, K: 2, expected: 3 },
    { A: 4, B: 22, K: 3, expected: 6 }
  ])("When '$A', '$B' and '$K' is given", ({ A, B, K, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(countDiv(A, B, K)).toBe(expected)
    })
  })
})
