function uniq(a: number[]) {
  const seen: Record<number, number> = {}
  const out = []
  const len = a.length
  let j = 0
  for (let i = 0; i < len; i++) {
    const item = a[i]
    if (seen[item] !== 1) {
      seen[item] = 1
      out[j++] = item
    }
  }
  return out
}

/*
  https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
  Find the smallest positive integer that does not occur in a given sequence.
*/
export function solution(A: number[]) {
  let missing = 0
  let condition = true
  A = uniq(A.filter((i) => i > 0)).sort((a, b) => a - b)
  if (A[0] !== 1) return 1
  if (A[A.length - 1] === A.length) return A.length + 1
  while (condition) {
    missing++
    condition = A[missing - 1] === missing
  }
  return missing
}
