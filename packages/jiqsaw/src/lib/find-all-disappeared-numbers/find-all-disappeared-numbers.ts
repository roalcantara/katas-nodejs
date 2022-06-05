// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array
export const solution = (nums: number[]) => {
  const output = []
  for (let i = 1; i <= nums.length; i++) {
    if (nums.indexOf(i) === -1) {
      output.push(i)
    }
  }
  return output
}
