/*
  https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
  Find a maximum sum of a compact subsequence of array elements.
*/
export const solution = (A: number[]) => {
  let sum = -1000000
  let total = -1000000
  let i = 0
  while (i < A.length) {
    sum = Math.max(A[i], sum + A[i])
    total = Math.max(sum, total)
    i++
  }
  return total
}
