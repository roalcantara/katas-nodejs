function checkPath(arr: string[][], value: string[]) {
  for (const key in arr) {
    const arrX = Math.abs(Number(arr[key][0]))
    const arrY = Math.abs(Number(arr[key][1]))

    const bigX = Math.max(arrX, Number(value[0]))
    const smallX = Math.min(arrX, Number(value[0]))

    const bigY = Math.max(arrY, Number(value[1]))
    const smallY = Math.min(arrY, Number(value[1]))

    if (bigX % smallX === 0 && bigY % smallY === 0) {
      return true
    }
  }
  return false
}

/*
  Given an array of points A representing the locations of the obstacles,
  returns the minimal number of hit
*/
export const solution = (A: string[][]) => {
  const LT = []
  const RT = []
  const LB = []
  const RB = []

  for (const i of A) {
    const x = Number(i[0]) > 0 ? 1 : -1
    const y = Number(i[1]) > 0 ? 1 : -1

    if (x === -1 && y === -1) {
      if (!checkPath(LB, i)) {
        LB.push(i)
      }
    }
    if (x === -1 && y === 1) {
      if (!checkPath(LT, i)) {
        LT.push(i)
      }
    }
    if (x === 1 && y === -1) {
      if (!checkPath(RB, i)) {
        RB.push(i)
      }
    }
    if (x === 1 && y === 1) {
      if (!checkPath(RT, i)) {
        RT.push(i)
      }
    }
  }

  return LT.length + RT.length + LB.length + RB.length
}
