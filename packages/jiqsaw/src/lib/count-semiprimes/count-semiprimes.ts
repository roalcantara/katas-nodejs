const isSemiPrime = (N: number) => {
  return 1
}

/**
 * Count the semiprime numbers in the given range [a..b]
 *
 * @param N
 * @param P
 * @param Q
 * @returns
 * @see https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_semiprimes/
 */
export const countSemiprimes = (N: number, P: number[], Q: number[]) => {
  let i = 0
  const arr = []
  while (i < P.length) {
    arr[i] = 0
    const p = P[i]
    const q = Q[i]
    let j = p
    while (j <= q) {
      arr[i] += isSemiPrime(j)
      j++
    }
    i++
  }
  return arr
}
