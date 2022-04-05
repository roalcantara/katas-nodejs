/**
 * Compute number of integers divisible by k in range [a..b]
 *
 * @param {number} A - lower bound
 * @param {number} B - upper bound
 * @param {number} K - divisor
 * @see https://app.codility.com/programmers/lessons/5-prefix_sums/count_div
 **/
export const countDiv = (A: number, B: number, K: number) => {
  const first = A % K === 0 ? A : A + (K - (A % K))
  const last = B % K === 0 ? B : B - (B % K)

  return (last - first) / K + 1
}
