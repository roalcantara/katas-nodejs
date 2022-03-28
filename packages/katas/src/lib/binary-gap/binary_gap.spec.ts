import { toBinary, countBinaryGaps, binaryGaps } from './binary_gap'

describe('#toBinary()', () => {
  describe.each([
    { input: 1, expected: '1' },
    { input: 5, expected: '101' },
    { input: 6, expected: '110' },
    { input: 9, expected: '1001' },
    { input: 11, expected: '1011' },
    { input: 15, expected: '1111' },
    { input: 16, expected: '10000' },
    { input: 19, expected: '10011' },
    { input: 20, expected: '10100' },
    { input: 32, expected: '100000' },
    { input: 42, expected: '101010' },
    { input: 328, expected: '101001000' },
    { input: 529, expected: '1000010001' },
    { input: 1024, expected: '10000000000' },
    { input: 1041, expected: '10000010001' },
    { input: 1162, expected: '10010001010' },
    { input: 51712, expected: '1100101000000000' },
    { input: 561892, expected: '10001001001011100100' },
    { input: 2147483647, expected: '1111111111111111111111111111111' }
  ])('When input is $input', ({ input, expected }) => {
    it(`returns ${expected}`, () => {
      expect(toBinary(input)).toBe(expected)
    })
  })
})

describe('#countBinaryGaps()', () => {
  describe.each([
    { input: '1', expected: [] },
    { input: '101', expected: [1] },
    { input: '110', expected: [] },
    { input: '1001', expected: [2] },
    { input: '1011', expected: [1] },
    { input: '1111', expected: [] },
    { input: '10000', expected: [] },
    { input: '10011', expected: [2] },
    { input: '10100', expected: [1] },
    { input: '100000', expected: [] },
    { input: '101010', expected: [1, 1] },
    { input: '101001000', expected: [1, 2] },
    { input: '1000010001', expected: [4, 3] },
    { input: '10000000000', expected: [] },
    { input: '10000010001', expected: [5, 3] },
    { input: '10010001010', expected: [2, 3, 1] },
    { input: '10001001001011100100', expected: [3, 2, 2, 1, 2] },
    { input: '1100101000000000', expected: [2, 1] },
    { input: '1111111111111111111111111111111', expected: [] }
  ])('When input is $input', ({ input, expected }) => {
    it(`returns ${expected}`, () => {
      expect(countBinaryGaps(input).join(',')).toBe(expected.join(','))
    })
  })
})

describe('#binaryGaps()', () => {
  describe.each([
    { input: 1, expected: 0 },
    { input: 5, expected: 1 },
    { input: 6, expected: 0 },
    { input: 9, expected: 2 },
    { input: 11, expected: 1 },
    { input: 15, expected: 0 },
    { input: 16, expected: 0 },
    { input: 19, expected: 2 },
    { input: 20, expected: 1 },
    { input: 32, expected: 0 },
    { input: 42, expected: 1 },
    { input: 328, expected: 2 },
    { input: 529, expected: 4 },
    { input: 1024, expected: 0 },
    { input: 1041, expected: 5 },
    { input: 1162, expected: 3 },
    { input: 51712, expected: 2 },
    { input: 561892, expected: 3 },
    { input: 2147483647, expected: 0 }
  ])('When input is $input', ({ input, expected }) => {
    it(`returns ${expected}`, () => {
      expect(binaryGaps(input)).toBe(expected)
    })
  })
})
