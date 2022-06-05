/*
  CountTriangles
  Count the number of triangles that can be built from a given set of edges.
  https://app.codility.com/programmers/lessons/15-caterpillar_method/count_triangles/
*/
export const solution = (A: number[]) => {
  let i = 0
  const len = A.length
  const arr = []
  const results = []
  let count = 0
  while (i < len - 2) {
    arr[0] = i
    let j = i + 1
    while (j < len) {
      arr[1] = j
      let y = j + 1
      while (y < len) {
        arr[2] = y
        if (arr[0] + arr[1] > arr[2] && arr[1] + arr[2] > arr[0] && arr[2] + arr[0] > arr[1]) {
          results.push([i, j, y])
          count++
        }
        y++
      }
      j++
    }
    i++
  }
  return count
}
