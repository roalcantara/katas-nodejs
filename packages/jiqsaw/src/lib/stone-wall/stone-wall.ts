/*
  https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
  StoneWall
  Cover "Manhattan skyline" using the minimum number of rectangles.
  write your code in JavaScript (Node.js 4.0.0)
*/
export function solution(H: number[]) {
  let counter = 0
  let height = 0
  const blocks = []
  let i = 0

  while (i < H.length) {
    if (H[i] > height) {
      const newBlock = H[i] - height
      blocks.push(newBlock)
      height += newBlock
      counter++
      i++
    } else if (H[i] < height) {
      const lastBlock = blocks.pop() ?? 0
      height -= lastBlock
    } else {
      i++
    }
  }
  return counter
}
