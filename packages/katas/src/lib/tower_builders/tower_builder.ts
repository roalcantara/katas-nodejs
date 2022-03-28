/**
 * Build Tower
 * Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
 * For example, a tower with 3 floors looks like this:
 * [
 *   "  *  ",
 *   " *** ",
 *   "*****"
 * ]
 */
export const towerBuilder = (nFloors: number): string[] =>
  Array.from(Array(nFloors).keys()).reduce<string[]>((acc, curr) => {
    const nSpaces = nFloors - curr - 1
    const nStars = curr * 2 + 1

    return [...acc, [' '.repeat(nSpaces), '*'.repeat(nStars), ' '.repeat(nSpaces)].join('')]
  }, [])
