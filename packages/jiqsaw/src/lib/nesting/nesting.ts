/*
    https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/
    Determine whether a given string of parentheses (single type) is properly nested.
*/
export function solution(S: string) {
  let temp = ''
  while (S !== '') {
    temp = S.replace(/\(\)|(\(\(\)\))|(\(\(\(\)\)\))/g, '')
    if (temp === S) {
      return false
    }
    S = temp
  }
  return true
}
