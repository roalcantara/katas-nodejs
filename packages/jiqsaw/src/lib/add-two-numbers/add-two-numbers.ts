/**
 *
 *     3. stage
 *
 *        65
 *        55
 *     +----
 *       120
 *
 *     5 + 5 = 10 take 0 carry 1 -- 0
 *     6 + 5 = 11 take 1 plus carried one = 2 and carry 1 -- 20
 *     finalise > 120
 *
 * @param {*} A
 * @param {*} B
 * @returns
 */
export const addTwoNumbers = (A: number, B: number) => {
  let result = ''
  let additional = 0
  let strA = A.toString()
  let strB = B.toString()

  strA = strA.padStart(strB.length, '0')
  strB = strB.padStart(strA.length, '0')

  let i = strA.length - 1

  while (i >= 0) {
    let sum = +strA[i] + +strB[i] + additional

    if (sum >= 10) {
      additional = 1
      sum = sum - 10
    } else additional = 0

    result = String(sum) + result
    i--
  }

  return +result
}
