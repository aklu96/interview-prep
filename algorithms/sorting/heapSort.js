/**
 * HEAP SORT
 * TIME COMPLEXITY: O(n*log n)
 * SPACE COMPLEXITY: O(1) if done in place, O(n) here
 *
 * Insert and remove root operations are O(log n) for a heap of size n
 *
*/

const Heap = require('../../data-structures/binaryHeap.js');

const heapSort = (comparator, nums) => {
  const result = [];
  const heap = new Heap(comparator);
  for (let i = 0; i < nums.length; i++) {
    heap.insert(nums[i]);
  }
  // by inserting every number into the heap, we maintain order
  // over which element is the smallest. by removing the root
  // one by one, we return a sorted array in ascending order
  for (let i = 0; i < nums.length; i++) {
    result.push(heap.removeRoot());
  }
  return result;
}

// use a min heap to sort an array from smallest to greatest
console.log(heapSort((a, b) => a < b, [4, 5, 1, 7, 8]));

// use a max heap to sort an array from greatest to smallest
console.log(heapSort((a, b) => a > b, [4, 5, 1, 7, 8]));

// you can use a min heap sort implementation of a given size to get
// the biggest k elements in an array, or vice versa. just remember that
// it's inverted counter-intuitively here