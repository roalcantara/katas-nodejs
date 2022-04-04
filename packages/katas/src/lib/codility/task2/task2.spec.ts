import { task2 } from './task2'

describe('#task2()', () => {
  describe.each([
    { input: 55, expected: 56 },
    { input: 1765, expected: 1767 },
    { input: 98, expected: 101 },
    { input: 44432, expected: 45010 },
    { input: 3298, expected: 3401 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(task2(input)).toBe(expected)
    })
  })
})
