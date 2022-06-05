/*
  https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
  Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
*/
export const solution = (A: number[]) => {
  const B = A.sort((a, b) => b - a)
  let max = B[0] * B[1] * B[2]
  if (B[B.length - 1] < 0 && B[B.length - 2] < 0) {
    const minusTotal = B[B.length - 1] * B[B.length - 2] * B[0]
    max = Math.max(max, minusTotal)
  }
  return max
}
