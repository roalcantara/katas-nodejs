/*
  https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/
  Find the minimal perimeter of any rectangle whose area equals N.
*/
export const solution = (N: number) => {
  let i = 2
  let len = N
  let dividable = false
  let total = N + 1
  // let arr = [];

  while (i < len) {
    if (N % i === 0) {
      dividable = true
      const result = N / i
      len = result
      total = Math.min(total, i + result)
    } else {
      if (!dividable) {
        len = Math.floor(N / i)
      }
    }
    i++
  }
  return total * 2
}
