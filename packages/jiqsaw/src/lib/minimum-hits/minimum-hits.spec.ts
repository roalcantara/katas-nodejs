import { solution as subject } from './minimum-hits'

describe('#minimumHits()', () => {
  describe.each([
    {
      input: [
        ['-1', '-2'],
        ['1', '-2'],
        ['2', '4'],
        ['-3', '2'],
        ['2', '-2']
      ],
      expected: 4
    }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns the minimal number of hit: '${expected}'`, () => {
      expect(subject(input)).toBe(expected)
    })
  })
})
