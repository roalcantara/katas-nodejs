const padZero = (len: number) => ['1', '0'.repeat(len), '1'].join('')

/**
 * Find longest sequence of zeros in binary representation of an integer.
 *
 * @param N
 * @returns
 * @see https://app.codility.com/programmers/lessons/1-iterations/
 */
export const binaryGap = (N: number) => {
  const b = N.toString(2)
  for (let i = b.length - 2; i > 0; i--) {
    if (b.indexOf(padZero(i)) !== -1) return i
  }
  return 0
}
