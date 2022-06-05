import { solution as subject } from './find-word'

describe('#findWord()', () => {
  describe.each([
    { input: ['U>N', 'G>A', 'R>Y', 'H>U', 'N>G', 'A>R'], expected: 'HUNGARY' },
    { input: ['U>N', 'G>A', 'R>Y', 'H>U', 'N>G', 'A>R'], expected: 'HUNGARY' }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
