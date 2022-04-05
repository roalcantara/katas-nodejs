/**
 *  A vending machine has the following denominations: 1c, 5c, 10c, 25c, 50c, and $1.
 *  Your task is to write a program that will be used in a vending machine to return change.
 *  Assume that the vending machine will always want to return the least number of coins or notes.
 *  Devise a function getChange(M, P) where M is how much money was inserted into the machine
 *  and P the price of the item selected, that returns an array of integers representing the number of
 *  each denomination to return.
 * @param M
 * @param P
 * @example getChange(5, 0.99) should return [1,0,0,0,0,4]
 * @returns
 */
export const changeCalculation = (M: number, P: number) => {
  const arrDenominations = [1, 5, 10, 25, 50, 100]
  const arrChangeBack = [0, 0, 0, 0, 0, 0]
  let change = (M - P) * 100

  for (let i = arrDenominations.length - 1; i >= 0; i--) {
    const element = arrDenominations[i]
    if (change >= element) {
      arrChangeBack[i] = Math.floor(change / element)
      change = change % element
    }
  }

  return arrChangeBack
}
