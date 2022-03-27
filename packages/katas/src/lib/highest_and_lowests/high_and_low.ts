/**
 * Highest and Lowest
 *
 * @param numbers W
 * @returns return the highest and lowest number
 * @note
 *   - All numbers are valid Int32, no need to validate them.
 *   - There will always be at least one number in the input string.
 *   - Output string must be two numbers separated by a single space, and highest number is first.
 */
export const highAndLow = (numbers: string) => {
  const nums = numbers.split(' ').map(Number)

  return `${Math.max(...nums)} ${Math.min(...nums)}`
}
