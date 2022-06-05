/*
  https://app.codility.com/programmers/lessons/8-leader/equi_leader/
  EquiLeader
  Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.
*/
export const solution = (A: number[]) => {
  let count = 0
  let i = 0
  let currThreshold = -1
  const B: number[] = []
  const C: number[] = []
  while (i < A.length) {
    C[A[i]] = C[A[i]] ? C[A[i]] + 1 : 1
    i++
  }
  i = 0
  while (i < A.length) {
    B[A[i]] = B[A[i]] ? B[A[i]] + 1 : 1
    C[A[i]] = C[A[i]] ? C[A[i]] - 1 : 0
    const threshold1 = Math.floor((i + 1) / 2) + 1
    const threshold2 = Math.floor((A.length - (i + 1)) / 2) + 1
    if (B[A[i]] === threshold1) {
      currThreshold = i
    }
    if (currThreshold !== -1 && B[A[currThreshold]] >= threshold1 && C[A[currThreshold]] >= threshold2) {
      count++
    }
    i++
  }
  return count
}
