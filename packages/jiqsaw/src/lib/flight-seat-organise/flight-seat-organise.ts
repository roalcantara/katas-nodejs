/*
    Q1
    A B C   D E F G   H I J
    _ _ _   _ _ _ _   _ _ _
*/
export const solution = (N: number, S: string) => {
  let count = N * 2

  let i = 1
  while (i <= N) {
    const strPattern = `${i}A|${i}B|${i}C|${i}D|${i}E|${i}F|${i}G|${i}H|${i}I|${i}J`
    const seats = S.match(new RegExp(strPattern, 'g'))

    if (seats !== null) {
      count -= 2
      if (
        seats.indexOf(i + 'B') === -1 &&
        seats.indexOf(i + 'C') === -1 &&
        seats.indexOf(i + 'D') === -1 &&
        seats.indexOf(i + 'E') === -1 &&
        seats.indexOf(i + 'F') === -1 &&
        seats.indexOf(i + 'G') === -1 &&
        seats.indexOf(i + 'H') === -1 &&
        seats.indexOf(i + 'I') === -1
      ) {
        count += 2
      } else {
        if (
          (seats.indexOf(i + 'B') === -1 &&
            seats.indexOf(i + 'C') === -1 &&
            seats.indexOf(i + 'D') === -1 &&
            seats.indexOf(i + 'E') === -1) ||
          (seats.indexOf(i + 'D') === -1 &&
            seats.indexOf(i + 'E') === -1 &&
            seats.indexOf(i + 'F') === -1 &&
            seats.indexOf(i + 'G') === -1) ||
          (seats.indexOf(i + 'F') === -1 &&
            seats.indexOf(i + 'G') === -1 &&
            seats.indexOf(i + 'H') === -1 &&
            seats.indexOf(i + 'I') === -1)
        ) {
          count += 1
        }
      }
    }

    i++
  }

  return count
}
