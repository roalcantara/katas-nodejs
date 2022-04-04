import { MORSE_CODE, MorseCode } from '../morse_code'

/**
 * Simple Morse code letter decoder
 *
 *    It is case-insensitive
 *    It is traditionally capitalized
 *
 * @param letter [string] letter to decode
 * @returns [string] decoded letter
 *
 * @example decodeLetter('.-') => A
 * @example decodeLetter('--.-') => Q
 * @example decodeLetter('.----') => 1
 **/
const decodeLetter = (letter: string) => MORSE_CODE[letter as MorseCode]

/**
 * Simple Morse code word decoder
 *
 *    1 space separates character codes
 *
 * @param word [string] word to decode
 * @returns [string] decoded word
 **/
const decodeWord = (word: string) => word.split(' ').map(decodeLetter).join('')

/**
 * Simple Morse code decoder
 *
 *    It is as a sequence of "dots" and "dashes"
 *    3 spaces separates words
 *
 * @param morseCode [string] Morse code to decode
 * @returns [string] decoded Morse code
 **/
export const decodeMorse = (morseCode: string) => morseCode.trim().split('   ').map(decodeWord).join(' ')
