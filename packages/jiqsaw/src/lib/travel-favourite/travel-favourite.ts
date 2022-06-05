/*
  Travel Favourite
*/
export function solution(A: number[], B: number[], C: number[]) {
  let i = 0
  const len = A.length
  let count = 0
  let a = 0
  let b = 0
  let c = 0

  while (i < len) {
    let j = 0
    while (j < len) {
      a = i
      b = j
      c = i
      if (A[a] < B[b] && B[b] < C[c]) {
        count++
      }
      if (i !== j) {
        a = i
        b = i
        c = j
        if (A[a] < B[b] && B[b] < C[c]) {
          count++
        }
        a = i
        b = j
        c = j
        if (A[a] < B[b] && B[b] < C[c]) {
          count++
        }
      }
      j++
    }
    i++
  }
  return count
}
