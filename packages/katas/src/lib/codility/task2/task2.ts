/* eslint-disable @typescript-eslint/no-loop-func */
/* eslint-disable no-loops/no-loops */

function findSmallestGrathestThan(i: number) {
  return i
    .toString()
    .split('')
    .every((v, x, a) => x === 0 || v !== a[x - 1])
}

/**
 * Find the smallest positive integer that does not occur in a given sequence.
 *
 * @param N [number] positive
 * @returns [number] the smallest positive integer that grather than N that does not contain two consecutive digits
 */
export const task2 = (N: number) => {
  let i = N + 1

  while (i <= 1_000_000_000) {
    if (findSmallestGrathestThan(i)) return i
    i++
  }

  return 0
}
