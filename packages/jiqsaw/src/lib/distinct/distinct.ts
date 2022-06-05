/*
  https://app.codility.com/programmers/lessons/6-sorting/distinct/
  Compute number of distinct values in an array.
*/
export const solution = (A: number[]) => {
  const seen = []
  let count = 0
  const len = A.length
  for (let i = 0; i < len; i++) {
    const item = A[i]
    if (seen[item] !== 1) {
      seen[item] = 1
      count++
    }
  }
  return count
}
