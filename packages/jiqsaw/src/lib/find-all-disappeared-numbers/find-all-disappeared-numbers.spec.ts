import { solution as subject } from './find-all-disappeared-numbers'

describe('#findAllDisappearedNumbers()', () => {
  describe.each([
    { input: [4, 3, 2, 7, 8, 2, 3, 1], expected: [5, 6] },
    { input: [1, 1], expected: [2] }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toStrictEqual(expected)
    })
  })
})
