/*
  Palindromes
  A palindrome is a word, number, phrase, or other sequence of characters which reads the same backward as forward, such as madam, racecar, or the number 10801.
  What is the sum of all numeric palindromes that are less than 10,000?
*/
export function solution(max = 10000, len = 999) {
  max = Math.ceil(max.toString().length / 2)
  let sum = 0
  let i = 1
  while (i <= len) {
    if (i < 10) {
      sum += i
    } else {
      const f = i.toString().charAt(0)
      const s = i.toString().charAt(1)
      if (f === s) {
        sum += i
      }
      sum += Number(i.toString() + f.toString())
      sum += Number(i.toString() + s.toString() + f.toString())
    }
    i++
  }
  return sum
}
