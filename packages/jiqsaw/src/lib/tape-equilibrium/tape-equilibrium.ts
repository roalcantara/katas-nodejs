/*
    https://app.codility.com/programmers/lessons/3-time_complexity/
    Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
*/
export function solution(A: number[]) {
  let sumRight = A.reduce(function (pv, cv, idx) {
    return idx > 0 ? pv + cv : 0
  }, 0)
  let sumLeft = 0
  const maxI = A.length - 1
  let min = null

  for (let i = 0; i < maxI; i++) {
    sumLeft += A[i]
    const d = Math.abs(sumLeft - sumRight)
    min = min === null ? d : Math.min(min, d)
    if (i + 1 <= maxI) sumRight -= A[i + 1]
  }

  return min
}
