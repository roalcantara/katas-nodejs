// https://leetcode.com/problems/rabbits-in-forest/
export function solution(answers: number[]) {
  const checked = []
  let count = 0
  for (let index = 0; index < answers.length; index++) {
    const element = answers[index]
    if (checked.indexOf(element) === -1) {
      count += element + 1
      checked.push(element)
    }
  }
  return count
}
