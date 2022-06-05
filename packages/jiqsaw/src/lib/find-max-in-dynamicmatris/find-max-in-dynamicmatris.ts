/* eslint-disable @typescript-eslint/no-loop-func */
const getValue = (arr: number[][], indexes: number[][]) => {
  let strNumber = ''
  for (const [x, y] of indexes) {
    if (arr[x] !== undefined && arr[x][y] !== undefined) {
      strNumber += String(arr[x][y])
    } else {
      return -1
    }
  }
  return Number(strNumber)
}

/*
  Q3: Find the maximum 4 digit number in dynamicmatris
*/
export const solution = (Board: string) => {
  const N = Board.substring(3, Board.indexOf(', M'))
  const M = Board.substring(Board.indexOf('M=') + 2, Board.length - 1)
  let i = 0
  let max = 0
  const arr: number[][] = []
  let maxNumberIds: number[][] = []
  const topNumbers: number[] = []

  while (i < Number(N)) {
    arr[i] = []
    Array.from(new Array(Number(M)), (_val, index) => {
      const rnd = Math.floor(Math.random() * 10)

      arr[i].push(rnd)

      if (rnd > max) {
        max = rnd
        maxNumberIds = [[i, index]]
      } else if (rnd === max) {
        maxNumberIds.push([i, index])
      }

      return rnd
    })
    i++
  }

  for (const [x, y] of maxNumberIds) {
    const list = [
      getValue(arr, [
        [x, y],
        [x - 1, y],
        [x - 2, y],
        [x - 3, y]
      ]),
      getValue(arr, [
        [x, y],
        [x - 1, y],
        [x - 2, y],
        [x - 2, y - 1]
      ]),
      getValue(arr, [
        [x, y],
        [x - 1, y],
        [x - 2, y],
        [x - 3, y + 1]
      ]),

      getValue(arr, [
        [x, y],
        [x - 1, y],
        [x - 1, y - 1],
        [x - 2, y - 1]
      ]),
      getValue(arr, [
        [x, y],
        [x - 1, y],
        [x - 1, y - 1],
        [x - 1, y - 2]
      ]),
      getValue(arr, [
        [x, y],
        [x - 1, y],
        [x - 1, y - 1],
        [x, y - 1]
      ]),

      getValue(arr, [
        [x, y],
        [x - 1, y],
        [x - 1, y + 1],
        [x - 2, y + 1]
      ]),
      getValue(arr, [
        [x, y],
        [x - 1, y],
        [x - 1, y + 1],
        [x - 1, y + 2]
      ]),
      getValue(arr, [
        [x, y],
        [x - 1, y],
        [x - 1, y + 1],
        [x, y + 1]
      ]),

      getValue(arr, [
        [x, y],
        [x, y - 1],
        [x, y - 2],
        [x, y - 1]
      ]),
      getValue(arr, [
        [x, y],
        [x, y - 1],
        [x, y - 2],
        [x - 1, y - 2]
      ]),
      getValue(arr, [
        [x, y],
        [x, y - 1],
        [x, y - 2],
        [x + 1, y - 2]
      ]),

      getValue(arr, [
        [x, y],
        [x, y - 1],
        [x - 1, y - 1],
        [x - 2, y - 1]
      ]),
      getValue(arr, [
        [x, y],
        [x, y - 1],
        [x - 1, y - 1],
        [x - 1, y - 2]
      ]),
      getValue(arr, [
        [x, y],
        [x, y - 1],
        [x - 1, y - 1],
        [x - 1, y]
      ]),

      getValue(arr, [
        [x, y],
        [x, y - 1],
        [x + 1, y - 1],
        [x + 2, y - 1]
      ]),
      getValue(arr, [
        [x, y],
        [x, y - 1],
        [x + 1, y - 1],
        [x + 1, y - 2]
      ]),
      getValue(arr, [
        [x, y],
        [x, y - 1],
        [x + 1, y - 1],
        [x + 1, y]
      ]),

      getValue(arr, [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x, y + 3]
      ]),
      getValue(arr, [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x - 1, y + 2]
      ]),
      getValue(arr, [
        [x, y],
        [x, y + 1],
        [x, y + 2],
        [x + 1, y + 2]
      ]),

      getValue(arr, [
        [x, y],
        [x, y + 1],
        [x - 1, y + 1],
        [x - 2, y + 1]
      ]),
      getValue(arr, [
        [x, y],
        [x, y + 1],
        [x - 1, y + 1],
        [x - 1, y]
      ]),
      getValue(arr, [
        [x, y],
        [x, y + 1],
        [x - 1, y + 1],
        [x - 1, y + 2]
      ]),

      getValue(arr, [
        [x, y],
        [x, y + 1],
        [x + 1, y + 1],
        [x + 1, y + 2]
      ]),
      getValue(arr, [
        [x, y],
        [x, y + 1],
        [x + 1, y + 1],
        [x + 2, y + 1]
      ]),
      getValue(arr, [
        [x, y],
        [x, y + 1],
        [x + 1, y + 1],
        [x + 1, y]
      ]),

      getValue(arr, [
        [x, y],
        [x + 1, y],
        [x + 2, y],
        [x + 3, y]
      ]),
      getValue(arr, [
        [x, y],
        [x + 1, y],
        [x + 2, y],
        [x + 2, y - 1]
      ]),
      getValue(arr, [
        [x, y],
        [x + 1, y],
        [x + 2, y],
        [x + 2, y + 1]
      ]),

      getValue(arr, [
        [x, y],
        [x + 1, y],
        [x + 1, y - 1],
        [x + 1, y - 2]
      ]),
      getValue(arr, [
        [x, y],
        [x + 1, y],
        [x + 1, y - 1],
        [x, y - 1]
      ]),
      getValue(arr, [
        [x, y],
        [x + 1, y],
        [x + 1, y - 1],
        [x + 2, y - 1]
      ]),

      getValue(arr, [
        [x, y],
        [x + 1, y],
        [x + 1, y + 1],
        [x, y + 1]
      ]),
      getValue(arr, [
        [x, y],
        [x + 1, y],
        [x + 1, y + 1],
        [x + 1, y + 2]
      ]),
      getValue(arr, [
        [x, y],
        [x + 1, y],
        [x + 1, y + 1],
        [x + 2, y + 1]
      ])
    ]

    topNumbers.push(Math.max(...list))
  }

  return Math.max(...topNumbers)
}
