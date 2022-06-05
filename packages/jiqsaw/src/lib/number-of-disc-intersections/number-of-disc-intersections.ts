/*
    https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
*/
export function solution(A: number[]) {
  let i = 0
  let len = A.length
  let count = 0
  const arr = []
  while (i < len) {
    arr.push([i - A[i], i + A[i]])
    i++
  }
  i = 0
  len = arr.length
  let j = 0
  while (i < len) {
    j = i + 1
    while (j < len) {
      if (
        (arr[j][0] >= arr[i][0] && arr[j][0] <= arr[i][1]) ||
        (arr[j][1] <= arr[i][1] && arr[j][1] >= arr[i][0]) ||
        (arr[i][0] >= arr[j][0] && arr[i][0] <= arr[j][1]) ||
        (arr[i][1] <= arr[j][1] && arr[i][1] >= arr[j][0])
      ) {
        count++
      }
      j++
    }
    i++
    if (count > 10000000) {
      return -1
    }
  }
  return count
}
