/* eslint-disable no-loops/no-loops */
export const toBinary = (n: number) => n.toString(2)

export const countBinaryGaps = (n: string) => {
  let len = 0
  const gaps = []
  for (let i = 0; i < n.length; i++) {
    if (n[i] === '1' && len > 0) {
      gaps.push(len)
      len = 0
    } else if (n[i] === '0') {
      len++
    }
  }
  return gaps
}

/**
 * Returns the length of its longest binary gap
 *
 * A binary gap within a positive integer N is
 * any maximal sequence of consecutive zeros that
 * is surrounded by ones at both ends in the binary representation of N.
 *
 * @param n Given a positive integer N where N is an integer within the range [1..2,147,483,647].
 * @returns returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
 *
 * @example
 *    Given a number 9
 *    With a binary representation 1001
 *    Then contains a binary gap of length 2.
 *
 * @example
 *    Given a number 529
 *    With a binary representation of 1000010001
 *    Then it contains two binary gaps: one of length 4 and one of length 3
 *
 * @example
 *    Given a number 20
 *    With a binary representation 10100
 *    Then it contains one binary gap of length 1.
 *
 * @example
 *    Given a number 15
 *    With a binary representation 1111
 *    Then it has no binary gaps.
 *
 * @example
 *    Given a number 32
 *    with a binary representation 100000
 *    Then it has no binary gaps.
 *
 * @example
 *    Given a number 1041
 *    With binary representation 10000010001
 *    And its longest binary gap is of length 5
 *    Then it returns 5.
 *
 * @example
 *    Given a number 32
 *    With a binary representation '100000'
 *    And thus no binary gaps.
 *    Then it returns 0.
 */
export const binaryGaps = (n: number) => {
  const binary = toBinary(n)
  const gaps = countBinaryGaps(binary)
  return gaps.length > 0 ? Math.max(...gaps) : 0
}
