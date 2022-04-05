/*
  Flip Cards
*/
export const flipCards = (A: number[], B: number[]) => {
  let i = 0
  const len = A.length
  let minIndex = -1
  let max = A[0]
  while (i < len) {
    if (A[i] !== B[i]) {
      if (A[minIndex] > A[i] || minIndex === -1) minIndex = i
    }
    if (max < A[i]) max = A[i]
    i++
  }
  return minIndex !== -1 ? A[minIndex] : max + 1
}
