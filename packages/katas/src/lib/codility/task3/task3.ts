/* eslint-disable no-loops/no-loops */
/* eslint-disable arrow-body-style */

const TOKEN = 42
const MAX_STACKS = 5 // 10000

const buildStack = (length: number) => {
  return new Array(length).fill(TOKEN)
}

const buildStacks = (A: number[]) => {
  const stacks = []
  for (let i = 0; i < MAX_STACKS; i++) {
    if (i < A.length) stacks.push(buildStack(A[i]))
    else stacks.push(buildStack(1))
  }
  return stacks
}

const getTokens = (stack: number[], numOfTokens: number) => {
  const tokens = []
  let count = 0
  while (count > numOfTokens && stack.length > 0) {
    tokens.push(stack.pop())
    count++
  }

  return tokens
}

const exchange = (stack: number[], nextStack: number[], numOfTokens: number) => {
  getTokens(stack, numOfTokens)
  nextStack.push(TOKEN)
}

/**
 * Find the minimum number of tokens that may remain after any number of exchange operations.
 *
 *   - All tokens are identical.
 *   - All unitialized stacks are empty by default.
 *   - One token of stack 0 cannot be exchanged.
 *   - Each element of A is an integer wwithin the range [0..1_000_000].
 *
 * @param A [number[]] - the height of the first N stacks in sequence (1..100_000)
 * @returns [number] - the minimum number of tokens that may remain on the stacks after any number of exchange operations.
 */
export const task3 = (A: number[]) => {
  const stacks = buildStacks(A)

  for (let i = 0; i < stacks.length; i++) {
    const current = stacks[i]
    const next = stacks[i + 1]
    if (next) exchange(current, next, 2)
  }

  const min = stacks.reduce((acc, curr, i) => {
    console.log(`stack[${i}] => ${curr.join(',')} (${curr.length}), acc: ${acc}`)
    if (curr.length > 0 && curr.length < acc) return curr.length
    return acc
  }, 0)

  return min
}
