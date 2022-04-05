/**
 * T: In a casino, all the playing cards got mixed up, and some of them got lost.
 *
 * You have to collect as many full decks as possible.
 * You get N mixed up French playing cards as your input.
 *
 * The cards are of the following ranks:
 * 2, 3, 4, 5, 6, 7, 8, 9, T, J, Q, K, A
 * The four suits are:
 * S - Spade (♠), C - Club(♣), H - Heart(♥), D - Diamond(♦)
 *
 * The cards are given using their rank followed by their suit:
 * 2 of Spades: 2S
 * Ace of Clubs: AC
 * 10 of Hearts: TH
 *
 * Write a function that will accept an array of cards and return the number of full
 * decks contained in the array.
 *
 * @param A
 * @returns
 **/
export const collectCards = (A: string[]) => {
  let i = 0
  const decks: Record<string, number[]> = {}
  let count = 0
  while (i < A.length) {
    const type = A[i].charAt(A[i].length - 1)
    let value = A[i].substring(0, A[i].length - 1)
    value = value.replace('A', '1').replace('T', '10').replace('J', '11').replace('Q', '12').replace('K', '13')

    if (!decks[type]) decks[type] = []
    decks[type][+value - 1] = 1

    const totalType = decks[type].reduce((x, y) => x + y)
    if (totalType === 13) {
      count++
      decks[type] = []
    }
    i++
  }
  return count
}
