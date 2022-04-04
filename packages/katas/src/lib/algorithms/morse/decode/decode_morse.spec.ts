import { decodeMorse } from './decode_morse'

describe('#decodeMorse()', () => {
  describe.each([
    { input: '.-', expected: 'A' },
    { input: '--.-', expected: 'Q' },
    { input: '.----', expected: '1' },
    { input: '…. . -.--   .--- ..- -.. .', expected: 'HEY JUDE' }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(decodeMorse(input)).toBe(expected)
    })
  })
})
