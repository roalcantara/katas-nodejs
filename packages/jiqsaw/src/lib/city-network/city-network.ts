/**
 * City Network
 *
 * @param T
 * @returns
 */
export const cityNetwork = (T: number[]) => {
  let i = 0
  const len = T.length
  const result = []
  let capital = -1
  while (i < len) {
    result[i] = 0
    if (i === T[i]) capital = i
    i++
  }
  i = 0
  while (i < len) {
    let resultIndex = 0
    if (i !== capital) {
      if (T[i] === capital) {
        resultIndex = 0
      } else {
        resultIndex++
        let nextIndex = T[i]
        let condition = false
        while (condition === false) {
          if (T[nextIndex] === capital) {
            condition = true
          } else {
            nextIndex = T[nextIndex]
            resultIndex++
          }
        }
      }

      result[resultIndex] = result[resultIndex] + 1
    }
    i++
  }
  return result
}
