import { spinWords as subject } from './spin_words'

describe('#spinWords()', () => {
  describe.each([
    { input: 'Hey fellow warriors', expected: 'Hey wollef sroirraw' },
    { input: 'This is a test', expected: 'This is a test' },
    { input: 'This is another test', expected: 'This is rehtona test' }
  ])('When "$input" is given', ({ input, expected }) => {
    it(`returns '${expected}' - the same string, but with all five or more letter words reversed`, () => {
      expect(subject(input)).toEqual(expected)
    })
  })
})
