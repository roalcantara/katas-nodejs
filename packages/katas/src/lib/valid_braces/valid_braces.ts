/**
 * Determines if the order of the braces is valid
 *
 * @param braces an nonempty string of braces: (), [], {}
 * @returns true if the order of the braces is valid; false otherwise
 */
export const validBraces = (braces: string) => {
  const closing: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const opening = Object.values(closing)
  const stack: string[] = []

  // eslint-disable-next-line no-loops/no-loops
  for (const char of braces) {
    if (opening.includes(char)) stack.push(char)
    else if (!stack.length) return false
    else if (stack[stack.length - 1] === closing[char]) stack.pop()
    else break
  }

  return !stack.length
}
