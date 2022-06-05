/*
  https://projecteuler.net/problem=1
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
  The sum of these multiples is 23.
  Find the sum of all the multiples of 3 or 5 below 1000.
*/
export function solution(A = 3, B = 5, C = 1000) {
  const startAt = B + 1
  let total = A + B
  for (let i = startAt; i < C; i++) {
    if (i % A === 0 || i % B === 0) {
      total = total + i
    }
  }
  return total
}
