import { solution as subject } from './max-counters'

describe('#maxCounters()', () => {
  describe.each([
    { input: 5, A: [3, 4, 4, 6, 1, 4, 4], expected: [3, 2, 2, 4, 2] },
    { input: 1, A: [2, 1, 1, 2, 1], expected: [3] },
    { input: 1, A: [1], expected: [1] }
  ])("When '$input' and '$A' are given", ({ input, A, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input, A)).toStrictEqual(expected)
    })
  })
})
