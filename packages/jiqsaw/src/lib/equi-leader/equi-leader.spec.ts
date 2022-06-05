import { solution as subject } from './equi-leader'

describe('#equiLeader()', () => {
  describe.each([
    { input: [4, 3, 4, 4, 4, 2], expected: 2 },
    { input: [4, 4, 2, 5, 3, 4, 4, 4], expected: 3 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
