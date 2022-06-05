/*
  https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
  Find value that occurs in odd number of elements.
*/
export function solution(A: number[]) {
  return A.reduce((x, y) => x ^ y)
}
