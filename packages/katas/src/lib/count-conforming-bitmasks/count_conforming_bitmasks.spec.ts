import { countConfirmingBitmasks } from './count_conforming_bitmasks'

describe('#countConfirmingBitmasks()', () => {
  describe.each([
    {
      input: [1_073_741_727, 1_073_741_631, 1_073_741_679],
      expected: 8
    },
    {
      input: [0, 0, 0],
      expected: 1073741824
    },
    {
      input: [1_073_741_823, 0, 0],
      expected: 1073741824
    },
    {
      input: [1023, 8184, 65472],
      expected: 11534336
    }
  ])('When input is $input', ({ input, expected }) => {
    it(`returns ${expected}`, () => {
      expect(countConfirmingBitmasks(input[0], input[1], input[2])).toEqual(expected)
    })
  })
})
