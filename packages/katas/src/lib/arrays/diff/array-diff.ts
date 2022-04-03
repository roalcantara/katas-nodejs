/**
 * Subtracts one list from another and returns the result
 *
 * It should
 *    remove all values from list a which are present in list b
 *    keeping their order
 *
 * If a value is present in b
 *    all of its occurrences must be removed from the other:
 *
 * @param a [number[]] list
 * @param b [number[]] list
 * @returns the result of a - b
 * @example arrayDiff([], [4, 5]) // []
 * @example arrayDiff([3, 4], [3]) // [4]
 * @example arrayDiff([1, 8, 2], []) // [1, 8, 2]
 * @example arrayDiff([1, 2, 3], [1, 2]) // [3]
 */
export const arrayDiff = (a: number[], b: number[]) => a.filter((x) => !b.includes(x))
