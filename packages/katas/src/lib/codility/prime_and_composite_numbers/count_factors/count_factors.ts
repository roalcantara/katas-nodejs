/**
 * Returns the number of factors of a given number
 *
 * A positive integer D is a factor of a positive integer N
 *    if there exists an integer M such that N = D \* M.
 *
 * For example,
 *    6 is a factor of 24,
 *    because M = 4 satisfies the condition (24 = 6 \* 4)
 *
 * Complexity:
 *    expected worst-case time complexity is O(sqrt(N));
 *    expected worst-case space complexity is O(1).
 *
 * @param N [number] a positive integer within the range [1..2,147,483,647]
 * @returns [number] the number of its factors
 * @example countFactors(24) === 8
 *    because 24 has 8 factors, namely 1, 2, 3, 4, 6, 8, 12, 24.
 *    There are no other factors of 24.
 */
export const countFactors = (N: number) => {
  let i = 1
  let count = 0
  const end = Math.sqrt(N)

  while (++i <= end) if (N % i == 0) ++count

  return count * 2 + (end * end == N ? 1 : 2)
}
