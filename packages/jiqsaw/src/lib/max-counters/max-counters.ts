/*
  https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
  Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.
*/
export const solution = (N: number, A: number[]) => {
  const counter = new Array(N)
  let i = 0
  while (i < N) {
    counter[i] = 0
    i++
  }
  let currMax = 0
  let lastMax = 0
  const threshold = N + 1
  i = 0
  while (A[i]) {
    const element = A[i]
    if (element < threshold) {
      if (counter[element - 1] < lastMax) {
        counter[element - 1] = lastMax + 1
      } else {
        counter[element - 1]++
      }
      if (counter[element - 1] > currMax) {
        currMax = counter[element - 1]
      }
    } else {
      lastMax = currMax
    }
    i++
  }
  let j = 0
  while (j < N) {
    if (counter[j] < lastMax) counter[j] = lastMax
    j++
  }
  return counter
}
