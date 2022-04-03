/**
 * Square every digit of a number and concatenate them
 * @param num an integer
 * @returns the squared digits of num
 * @example squareDigits(9119) // 811181 because 92 is 81 and 12 is 1
 */
export const squareDigits = (num: number) =>
  +num
    .toString()
    .split('')
    .map((digit) => Math.pow(+digit, 2))
    .join('')
