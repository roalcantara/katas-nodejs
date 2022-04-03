/* eslint-disable no-loops/no-loops */
/**
 * find the number n of cubes used to build a pile of cubes
 *
 * Construct a building which will be a pile of n cubes.
 *
 * The cube at the bottom
 *    will have a volume of n^3
 * the cube above
 *    will have volume of (n-1)^3 and so on until the top
 * the at the top
 *    will have a volume of 1^3
 *
 * Think you are a builder - who constructs buildings/Apartments
 *    and you are given the infinite space/width
 *    but Limited Height(that is m here[function parameter]).
 *    So you are supposed to build blocks/floors/cubes
 *    and at the end tell how many blocks have build in the given height.
 *
 * For example:
 *
 *    if each block takes 1 height
 *    and you are given 5 as the height limit
 *    then you can construct 5 blocks/floors
 *    and whole given height is used.
 *
 *    but if each block takes 2 heights to build
 *    then you can construct
 *    but you have to leave 1 height vacant
 *    as it is not possible to construct the third one(5 % 2 => 1).
 *
 *    if you encounter the first case
 *        then return the no. of floors you constructed.
 *
 *    if you encounter the later/second case
 *      then return -1
 *      as it is not possible to build in the given height
 *      and you are not supposed to leave any height empty.
 *
 * @param m [number] total volume of the building
 * @returns [number] n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n
 * @example buildPileOfCubes(1071225) // 45
 * @example buildPileOfCubes(91716553919377) // -1
 */
export const buildPileOfCubes = (m: number) => {
  let n = 0

  while (m > 0) m -= Math.pow(++n, 3)

  return m ? -1 : n
}
