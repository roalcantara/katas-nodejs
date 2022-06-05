// https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero
export const solution = (nums: number[], x: number) => {
  let count = 0
  const len = nums.length
  while (x > 0 && count <= len) {
    const left = nums[0]
    const right = nums[nums.length - 1]
    if (left > x && right > x) return -1
    if (left >= right && left <= x) {
      count++
      x -= nums[0]
      nums.shift()
    } else {
      count++
      x -= nums[nums.length - 1]
      nums.pop()
    }
  }
  if (x === 0) return count
  return -1
}
