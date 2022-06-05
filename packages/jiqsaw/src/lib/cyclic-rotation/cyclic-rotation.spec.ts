import { solution as subject } from './cyclic-rotation'

describe('#cyclicRotation()', () => {
  describe.each([
    { input: [5, -1000], K: 1, expected: [-1000, 5] },
    { input: [3, 8, 9, 7, 6], K: 3, expected: [9, 7, 6, 3, 8] }
  ])("When '$input', '$K' is given", ({ input, K, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input, K)).toStrictEqual(expected)
    })
  })
})
