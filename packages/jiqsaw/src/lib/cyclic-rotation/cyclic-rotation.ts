/*
  https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
  Rotate an array to the right by a given number of steps
*/
export const solution = (A: number[], K: number) => {
  K = A.length > K ? K : K % A.length

  const d = A.slice(0, A.length - K)
  const e = A.splice(A.length - K)
  return e.concat(d)

  // K = K % A.length;
  // if (K === 0 || K === A.length) {
  //     return A;
  // }
  // const sliceIndex = A.length - K;
  // return [...A.slice(sliceIndex), ...A.slice(0, sliceIndex)]
}
