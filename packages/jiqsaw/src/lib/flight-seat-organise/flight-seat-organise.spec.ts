import { solution as subject } from './flight-seat-organise'

describe('#flightSeatOrganise()', () => {
  describe.each([
    { N: 1, S: '', expected: 2 }
    // { N: 6, S: '1A 1G 2F 1C 2D 3B 3C 4B 1B 6D 6I', expected: 10 },
    // { N: 23, S: '1G 2F 3C 2C 17F 2D 2E 20B 2B 2G 2H 2J 5D 5H', expected: 39 },
    // { N: 4, S: '4C 4F', expected: 7 },
    // { N: 2, S: '', expected: 0 }
  ])("When '$N' and '$S' is given", ({ N, S, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(N, S)).toBe(expected)
    })
  })
})
