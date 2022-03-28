import { towerBuilder as subject } from './tower_builder'

describe('#towerBuilder()', () => {
  describe('Build a pyramid-shaped tower given a positive integer number of floors', () => {
    describe.each([
      { input: 1, expected: ['*'] },
      { input: 2, expected: [' * ', '***'] },
      { input: 3, expected: ['  *  ', ' *** ', '*****'] },
      { input: 6, expected: ['     *     ', '    ***    ', '   *****   ', '  *******  ', ' ********* ', '***********'] }
    ])('Given a number of floors $input', ({ input, expected }) => {
      it(`returns the following tower: ${expected}`, () => {
        expect(subject(input)).toEqual(expected)
      })
    })
  })
})
