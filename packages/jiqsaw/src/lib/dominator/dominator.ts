/*
  https://app.codility.com/programmers/lessons/8-leader/dominator/
  Dominator
  Find an index of an array such that its value occurs at more than half of indices in the array.
*/
export const solution = (A: number[]) => {
  const B: number[] = []
  const threshold = Math.floor(A.length / 2) + 1
  let i = 0
  while (i < A.length) {
    B[A[i]] = B[A[i]] ? B[A[i]] + 1 : 1
    if (B[A[i]] === threshold) {
      return i
    }
    i++
  }
  return -1
}
