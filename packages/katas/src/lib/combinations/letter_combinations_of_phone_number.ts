/* eslint-disable no-loops/no-loops */
const KEYBOARD: Record<string, string> = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
}

const dfs = (digits: string, path: string[] = [], res: string[] = []) => {
  if (path.length === digits.length) return res.push(path.join(''))

  for (const letter of KEYBOARD[digits.charAt(path.length)]) {
    path.push(letter)
    dfs(digits, path, res)
    path.pop()
  }

  return res
}

export const letterCombinationsOfPhoneNumber = (digits: number) => dfs(digits.toString())
