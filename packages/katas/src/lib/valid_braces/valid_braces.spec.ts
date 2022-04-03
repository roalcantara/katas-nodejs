import { validBraces as subject } from './valid_braces'

describe('#validBraces()', () => {
  describe.each([
    { input: '()', expected: true },
    { input: '()[]{}', expected: true },
    { input: '(){}[]', expected: true },
    { input: '([{}])', expected: true },
    { input: '(}', expected: false },
    { input: '[(])', expected: false },
    { input: '[({})](]', expected: false },
    { input: '(((({{', expected: false },
    { input: '}}]]))}])', expected: false }
  ])("When braces is '$input'", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
