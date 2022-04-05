import { brackets } from './brackets'

describe('#brackets()', () => {
  describe.each([
    { input: '{[()()]}', expected: 1 },
    { input: '([)()]', expected: 0 },
    { input: '', expected: 1 },
    { input: '({{({}[]{})}}[]{})', expected: 1 },
    { input: '()(()())((()())(()()))', expected: 1 }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(brackets(input)).toBe(expected)
    })
  })
})
