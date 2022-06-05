import { solution as subject } from './fibonacci'

describe('#fibonacci()', () => {
  // describe.each([
  //   { input: 10000, expected: 4613732 }
  //   // { input: 10000, expected: 4613732 }
  // ])("When '$input' is given", ({ input, expected }) => {
  //   it(`returns '${expected}'`, () => {
  //     expect(subject(input)).toBe(expected)
  //   })
  // })
  it('is expected be defined', () => {
    expect(subject).toBeDefined()
  })
})
