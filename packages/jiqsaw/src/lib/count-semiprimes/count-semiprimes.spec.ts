import { countSemiprimes } from './count-semiprimes'

describe('#countSemiprimes()', () => {
  describe.each([
    { N: 1, P: [1], Q: [1], expected: [1] },
    { N: 26, P: [1, 4, 16], Q: [26, 10, 20], expected: [26, 7, 5] }
  ])("When '$N' and '$P' and '$Q' is given", ({ N, P, Q, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(countSemiprimes(N, P, Q)).toStrictEqual(expected)
    })
  })
})
