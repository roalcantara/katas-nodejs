/*
  A[0] = 3    A[1] = 5    A[2] = 1
  represents the number V = 153;
  Write a function that should return 9, because:
    - array A represents the number 153,
    - 17 * 153 = 2601 (17 is given)
    - the sum of the digits in the decimal representation of 2601 is 2 + 6 + 0 + 1 =9
*/
export const solution = (num: number, A: number[]) => {
  const newNumber = num * Number(A.reverse().toString().replace(/,/g, ''))
  let total = 0
  newNumber
    .toString()
    .split('')
    .map((e) => (total += Number(e)))
  return total
}
