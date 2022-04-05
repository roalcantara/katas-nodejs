/**
 * ChocolatesByNumbers
 *
 * There are N chocolates in a circle.
 * Count the number of chocolates you will eat.
 *
 * @param N
 * @param M
 * @returns
 * @see https://app.codility.com/programmers/lessons/12-euclidean_algorithm/chocolates_by_numbers/
 */
export const chocolatesByNumbers = (N: number, M: number) => {
  let i = 0
  let count = 1
  if (N % M === 0) return N / M
  while (i !== -1) {
    i = i + M
    if (i >= N) {
      i = i % N
      if (i === 0) return count
    }
    count++
  }
  return 1
}
