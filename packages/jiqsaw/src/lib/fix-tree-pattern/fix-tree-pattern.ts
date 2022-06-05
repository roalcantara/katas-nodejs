/*
    Q2
            |
    |       |
    | |     |
    | | |   |
    | | | | |
    | | | | |
*/
export const solution = (A: number[]) => {
  let i = 1
  const len = A.length
  let count = 0
  while (i < len - 1) {
    const prev = A[i - 1]
    const curr = A[i]
    const next = A[i + 1]
    if (curr < prev && curr > next) {
      if (A[i + 2]) {
        if (next > A[i + 2]) {
          A[i] = next - 1
        } else {
          A[i] = prev + 1
        }
      }
      count++
    } else if (curr > prev && curr < next) {
      if (A[i + 2]) {
        if (next > A[i + 2]) {
          A[i] = prev - 1
        } else {
          A[i] = next + 1
        }
      }
      count++
    }
    i++
  }
  return count
}
