/*
  https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
  Check whether array A is a permutation.
*/
export function solution(A: number[]) {
  A = A.sort((a, b) => a - b)
  for (let i = 0; i < A.length; i++) {
    if (A[i] != i + 1) {
      return 0
    }
  }
  return 1
}
