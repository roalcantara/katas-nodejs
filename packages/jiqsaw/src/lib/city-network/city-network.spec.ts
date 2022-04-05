import { cityNetwork } from './city-network'

describe('#cityNetwork()', () => {
  describe.each([
    { input: [9, 1, 4, 9, 0, 4, 8, 9, 0, 1], expected: [1, 3, 2, 3, 0, 0, 0, 0, 0, 0] },
    { input: [9, 1, 4, 9, 0, 4, 8, 9, 0, 1], expected: [1, 3, 2, 3, 0, 0, 0, 0, 0, 0] }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(cityNetwork(input)).toStrictEqual(expected)
    })
  })
})
