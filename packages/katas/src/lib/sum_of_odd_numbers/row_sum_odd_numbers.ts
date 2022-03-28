/**
 * Given the triangle of consecutive odd numbers
 *
 * The sum of the first n positive odd integers can be calculated by using the well-known of the arithmetic progression,
 * that the sum of its is equal to the arithmetic mean of the first and the last , multiplied by the number of the :
 *
 * Thus, the sum of the first n odd numbers is n²
 * (this result has been proved first time in 1575 by Francesco Maurolico).
 *
 * Below, the odd numbers have been set to form a triangle, each nnt row containing the next n consecutive odd numbers.
 *
 * The arithmetic mean on the row is n² and the sum of its numbers is n * n² = n³
 *
 * @param n starting at index 1
 * @returns the sum of the numbers in the nth row of this triangle
 * @example Input --> Output
 * @link http://t.ly/iZs1
 */
export const rowSumOddNumbers = (n: number) => Math.pow(n, 3)
