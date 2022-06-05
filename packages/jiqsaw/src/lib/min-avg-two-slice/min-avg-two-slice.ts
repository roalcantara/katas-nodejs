/*
  https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
  Find the minimal average of any slice containing at least two elements.
*/
export const solution = (A: number[]) => {
  const len = A.length
  let resultIndex = 0
  let minAvg = (A[0] + A[1]) / 2

  for (let i = 0; i < len - 1; i++) {
    let currAvg = A[i]
    for (let j = i + 1; j < len; j++) {
      if (j === i + 1 || A[j] < minAvg) {
        currAvg += A[j]
        const divide = j - i + 1
        if (currAvg / divide < minAvg) {
          minAvg = currAvg / divide
          resultIndex = i
        }
      } else {
        j = len
      }
    }
  }
  return resultIndex
}
