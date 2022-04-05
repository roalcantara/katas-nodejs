/**
 * Determine whether a given string of parentheses (multiple types) is properly nested.
 *
 * Note: Using recrusive method to clear string is a slower method. Got up to 87% max.
 * However, This solution below is 100% although seems more complicated.
 *
 * @param S
 * @returns
 * @see https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
 */
export const brackets = (S: string) => {
  let i = 0
  let len = S.length

  if (len === 0) return 1
  if (len % 2 !== 0) return 0

  len = S.length
  const arrChar = ['(', ')', '{', '}', '[', ']']
  const arrIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  while (i < len) {
    const ch = S.charAt(i)
    const charIndex = arrChar.indexOf(ch)
    const even = Number(i % 2 === 0)

    arrIndex[charIndex * 2 + even]++

    if (
      arrIndex[2] + arrIndex[3] > arrIndex[0] + arrIndex[1] ||
      arrIndex[6] + arrIndex[7] > arrIndex[4] + arrIndex[5] ||
      arrIndex[10] + arrIndex[11] > arrIndex[8] + arrIndex[9]
    ) {
      return 0
    }
    i++
  }

  return Number(
    arrIndex[0] === arrIndex[3] &&
      arrIndex[1] === arrIndex[2] &&
      arrIndex[4] === arrIndex[7] &&
      arrIndex[5] === arrIndex[6] &&
      arrIndex[8] === arrIndex[11] &&
      arrIndex[9] === arrIndex[10]
  )
}
