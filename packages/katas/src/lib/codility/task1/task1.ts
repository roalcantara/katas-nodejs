/* eslint-disable no-loops/no-loops */
/* eslint-disable arrow-body-style */

function count(A: number[], B: number[]) {
  let countA = 0
  let countB = 0
  for (let i = 0; i < A.length; i++) {
    countA += A[i]
    countB += B[i]
  }

  return {
    countA,
    countB
  }
}

function check(i: number, tA: number, tB: number, countA: number, countB: number) {
  const tA2 = 2 * tA
  const tB2 = 2 * tB

  return i !== 1 && tA === tB && tA2 === countA && tB2 == countB
}

function countK(A: number[], B: number[], countA: number, countB: number) {
  let k = 0
  let tA = A[0]
  let tB = B[0]

  for (let y = 1; y < A.length; y++) {
    if (check(y, tA, tB, countA, countB)) k++
    tA += A[y]
    tB += B[y]
  }

  return k
}

/**
 * Count fair indexes
 *
 * @param A arrays of integers
 * @param B arrays of integers
 * @returns total number of fair indexes
 * @see https://algo.monster/problems/fair_indexes
 */
export const task1 = (A: number[], B: number[]) => {
  const { countA, countB } = count(A, B)

  return countK(A, B, countA, countB)
}
