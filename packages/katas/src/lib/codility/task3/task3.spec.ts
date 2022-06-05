import { task3 } from './task3'

describe('#task3()', () => {
  // describe.each([
  //   { input: [2, 3], expected: 1 },
  //   { input: [1, 0, 4, 1], expected: 3 }, // token of stack 0 cannot be exchanged
  //   { input: [5], expected: 2 },
  //   { input: [4, 0, 3, 0], expected: 1 }
  // ])("When '$input' is given", ({ input, expected }) => {
  //   it(`returns the minimum number of tokens that may remain after any number of exchange operations: '${expected}'`, () => {
  //     expect(task3(input)).toBe(expected)
  //   })
  // })
  it('is expected be defined', () => {
    expect(task3).toBeDefined()
  })
})
