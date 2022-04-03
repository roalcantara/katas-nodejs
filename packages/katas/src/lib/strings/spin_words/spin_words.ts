/**
 * Reverse all five or more letter words
 *
 *    - Strings passed in will consist of only letters and spaces.
 *    - Spaces will be included only when more than one word is present.
 *
 * @param words [string] the string to be reversed
 * @returns [string] the same string, but with all five or more letter words reversed
 *
 * @example spinWords('Hey fellow warriors') => returns 'Hey wollef sroirraw'
 * @example spinWords( "This is a test") => returns "This is a test"
 * @example spinWords( "This is another test" )=> returns "This is rehtona test"
 **/
export const spinWords = (words: string) =>
  words
    .split(' ')
    .map((word) => (word.length >= 5 ? word.split('').reverse().join('') : word))
    .join(' ')
