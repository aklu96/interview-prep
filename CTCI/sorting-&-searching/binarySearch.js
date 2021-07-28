// easy binary search

const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const midpoint = Math.floor((end - start) / 2) + start;

    if (arr[midpoint] === target) {
      // return index of target if found
      return midpoint;
    }

    if (arr[midpoint] > target) {
      end = midpoint - 1;
    } else {
      start = midpoint + 1;
    }

  }
  return null;
};

console.log(binarySearch([1, 3, 5, 8, 9, 18], 18));
