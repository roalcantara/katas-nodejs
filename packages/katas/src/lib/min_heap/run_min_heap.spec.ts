import { runMinHeap } from './run_min_heap'

describe('#runMinHeap()', () => {
  describe.each([
    { input: [30, 20, 10, 100, 33, 12], expected: [10, 12, 20] },
    { input: [30, 20, 10, 100, 33, 12], expected: [10, 12, 20] }
  ])("When '$input' is given", ({ input, expected }) => {
    it(`returns '${expected}'`, () => {
      expect(runMinHeap(input)).toStrictEqual(expected)
    })
  })
})
