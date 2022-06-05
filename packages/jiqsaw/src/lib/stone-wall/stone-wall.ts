/*
    https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
    StoneWall
    Cover "Manhattan skyline" using the minimum number of rectangles.
    write your code in JavaScript (Node.js 4.0.0)
*/
// console.log('STONE WALL')
// function solution(H) {
//     let i = 0;
//     let len = H.length;
//     let stones = [];
//     let inUse = 0;
//     while (i < len) {
//         let value = H[i];
//         if (stones[value] === 1) {
//             inUse++;
//         }
//         // if (value < stones.length - 1) {
//             stones.splice(value)
//         // }
//         stones[value] = 1;
//         console.log('inUse', inUse)
//         console.log('stones:', stones)
//         console.log('--------------------')
//         i++;
//     }
//     return len - inUse;
// }
export function solution(H: number[]) {
  let counter = 0
  let height = 0
  const blocks = []
  let i = 0

  while (i < H.length) {
    console.log(i)
    console.log('value: ', H[i])
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
    // console.log('blocks:', blocks)
    // console.log('height:', height)
    // console.log('counter:', counter)
    // console.log('--------------------')
  }
  return counter
}
