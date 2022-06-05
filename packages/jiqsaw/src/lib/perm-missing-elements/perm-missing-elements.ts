/*
  https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
  Find the missing element in a given permutation.
*/
export function solution(A: number[]) {
  const len = A.length

  if (len <= 1) return 1

  const max = len + 1
  const total = A.reduce((x, y) => x + y)
  const missTotal = total - max
  const actTotal = (len * (len + 1)) / 2
  const o = actTotal - missTotal

  return o
}
