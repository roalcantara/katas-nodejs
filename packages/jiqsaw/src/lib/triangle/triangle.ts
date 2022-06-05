/*
    https://app.codility.com/programmers/lessons/6-sorting/triangle/
    Determine whether a triangle can be built from a given set of edges.
*/
export function solution(A: number[]) {
  let i = 0
  const len = A.length
  A = A.sort((a, b) => b - a)

  while (i < len) {
    const p = A[i]
    const q = A[i + 1]
    const r = A[i + 2]

    if (p + q > r && p + r > q && q + r > p) {
      return 1
    }
    i++
  }
  return 0
}
