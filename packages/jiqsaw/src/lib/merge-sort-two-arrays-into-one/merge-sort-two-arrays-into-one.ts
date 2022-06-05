/*
  Merge and sort pre-sorted array into one array
  https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space
*/
export const solution = (l1: number[], l2: number[]) => {
  const l3 = []
  let i1 = 0
  let i2 = 0
  while (l3.length < l1.length + l2.length) {
    const a = l1[i1]
    const b = l2[i2]
    if (a <= b) {
      l3.push(a)
      i1++
    } else {
      l3.push(b)
      i2++
    }
    if (l1.length === i1) {
      l3.push(...l2.slice(i2))
    } else if (l2.length === i2) {
      l3.push(...l1.slice(i1))
    }
  }

  return l3
}
