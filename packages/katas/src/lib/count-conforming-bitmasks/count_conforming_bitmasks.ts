/* eslint-disable no-loops/no-loops */
// https://stackoverflow.com/questions/10401239/count-bitmasks-enumerate-0s

const count = (d: number) => {
  let bits = 0
  for (let i = 0; i < 32; i++) {
    if (((d >> i) & 1) == 0) bits++
    // if ((d & 1) == 0) bits++
    // d >>= 1 //shift right
  }
  return Math.pow(2, bits)
}

/**
 * Returns the number of unsigned 30-bit integers conforming to at least one of the given integers
 *
 * In this problem we consider unsigned 30-bit integers
 *    - i.e. all integers B such that 0 ≤ B < 230.
 *
 * We say that integer A conforms to integer B if:
 *    - in all positions where B has bits set to 1
 *    - A has corresponding bits set to 1.
 *
 * For example:
 *    - '00 0000 1111 0111 1101 1110 0000 1111' = 16,244,239 conforms to,
 *    - '00 0000 1100 0110 1101 1110 0000 0001' = 13,032,961, but,
 *    - '11 0000 1101 0111 0000 1010 0000 0101' = 819,399,173 does not conform to,
 *    - '00 0000 1001 0110 0011 0011 0000 1111' = 9,843,471.,
 *
 * @param n Three unsigned 30-bit integers (within the range [0..1,073,741,823]) A, B and C
 * @returns returns the number of unsigned 30-bit integers conforming to at least one of the given integers.
 *
 * @example
 *    Given unsigned 30-bit integers (within the range [0..1,073,741,823]) A, B and C
 *    And B =   '11 1111 1111 1111 1111 1111 0011 1111' = 1,073,741,631,
 *        A =   '11 1111 1111 1111 1111 1111 1001 1111' = 1,073,741,727,
 *    And C =   '11 1111 1111 1111 1111 1111 0110 1111' = 1,073,741,679,
 *
 *    When there are 8 unsigned 30-bit integers conforming to A, B or C:
 *              '11 1111 1111 1111 1111 1111 0011 1111' = 1,073,741,631,
 *              '11 1111 1111 1111 1111 1111 1011 1111' = 1,073,741,759,
 *              '11 1111 1111 1111 1111 1111 1101 1111' = 1,073,741,791,
 *              '11 1111 1111 1111 1111 1111 0111 1111' = 1,073,741,695,
 *              '11 1111 1111 1111 1111 1111 1001 1111' = 1,073,741,727,
 *              '11 1111 1111 1111 1111 1111 1111 1111' = 1,073,741,823.
 *              '11 1111 1111 1111 1111 1111 0110 1111' = 1,073,741,679,
 *              '11 1111 1111 1111 1111 1111 1110 1111' = 1,073,741,807,
 *    Then it returns 8.
 */
export const countConfirmingBitmasks = (A: number, B: number, C: number) => {
  const MAX = 1_073_741_823
  const arr = [...new Set([A, B, C])].sort()

  if (arr.find((i) => i === 0) == 0) {
    return MAX + 1
  }

  let total = 0
  total += count(A)
  total += count(B)
  total += count(C)
  // total -= count(A | B)
  // total -= count(B | C)
  // total -= count(C | A)
  // total += count(A | B | C)
  return total

  // return arr.reduce((acc, current) => {
  //   const curr = current.toString(2)
  //   acc.add(current)
  //   let next = current + 1
  //   console.log(`[${current}] ------------> '${curr}'`)

  //   while (next <= MAX) {
  //     let confirming = true
  //     const nextBin = next.toString(2)
  //     console.log(`[${next}] ------------> '${nextBin}'`)
  //     for (let i = 0; i < nextBin.length; i++) {
  //       if (curr[i] === '1' && nextBin[i] !== '1') {
  //         confirming = false
  //         break
  //       }
  //     }
  //     if (confirming) {
  //       acc.add(next)
  //     }
  //     next++
  //   }
  //   return acc
  // }, new Set()).size
}
