export const solution = (A: number[], X: number, Y: number) => {
  let totalCost = 0
  let sorted = A.sort((a, b) => a - b)
  let sIndex = 0
  let lastIndex = A.length
  let tmpSum = null

  while (sIndex < lastIndex) {
    tmpSum = 0
    let i = sIndex
    const max = sorted[lastIndex - 1]
    while (tmpSum < max && i < lastIndex - 1) {
      tmpSum += A[i]
      i++
    }
    if (tmpSum >= max) {
      if (Y < (i + 1) * X) {
        totalCost += Y
        sIndex = i
        const extra = tmpSum - max
        if (extra > 0) {
          sorted = [extra, ...sorted]
          sIndex -= 1
        }
      } else {
        totalCost += X
      }
    } else {
      totalCost += X < Y ? X : Y
    }

    lastIndex--
  }

  return totalCost
}
