import { MinHeap, HeapItem } from './min_heap'

export const runMinHeap = (arr: number[]) => {
  const heap = arr.reduce((acc, curr) => {
    acc.push(new HeapItem(curr))

    return acc
  }, new MinHeap())

  const res = []
  for (let i = 0; i < 3; i++) {
    res.push(heap.pop().item)
  }

  return res
}
