/*
    Write a function that returns the maximum number of groups that can be reordered independently
    A = [1, 5, 4, 9, 8, 7, 12, 13, 14]
    should return 6.
    Because, can be split into six groups:
    [1], [5, 4], [9, 8, 7], [12], [13], [14]
*/
export function solution(A: number[]) {
  const B = []

  let filtered = []
  const len = A.length

  for (let i = 0; i < len; i++) {
    if (i > 0 && A[i - 1] - 1 !== A[i]) {
      const minC = Math.min(...A.slice(i))
      const maxB = Math.max(...A.slice(0, i))

      if (minC > maxB) {
        B.push(filtered)
        filtered = []
      }
    }
    filtered.push(A[i])
  }

  B.push(filtered)
  return B.length
}
