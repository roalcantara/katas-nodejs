/*
  https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
  Count minimal number of jumps from position X to Y.
*/
export const solution = (X: number, Y: number, D: number) => Math.ceil((Y - X) / D)
