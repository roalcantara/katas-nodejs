/*
  https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
  Find the missing element in a given permutation.
*/
export function solution(A: number[]) {
  const len = A.length

  if (len <= 1) return 1

  const max = len + 1
  // console.log('max:', max)
  const total = A.reduce((x, y) => x + y)
  // console.log('total:', total)
  const missTotal = total - max
  // console.log('missTotal:', missTotal)
  const actTotal = (len * (len + 1)) / 2
  // console.log('actTotal:', actTotal)
  const o = actTotal - missTotal
  // console.log('o:', o)

  return o
}
