// recursive implementation
// O(2^N) time and space
// top-down
const fib1 = (n) => {
  if (n === 0 || n === 1) {
    return n;
  }
  return fib1(n - 1) + fib1(n - 2);
};

// console.log(fib1(6));

// implement memoization
// if a fib has already been computed, store it in an array
// check if it has been computed already before calling fib again
// still top-down but with DP
// O(N) time and space
const fib2 = (n, memo = []) => {
  // base case
  if (n === 0 || n === 1) {
    return n;
  }
  if (!memo[n]) {
    memo[n] = fib2(n - 1, memo) + fib2(n - 2, memo);
  }
  return memo[n];
};

// console.log(fib2(6));

// Iterative
// Bottom-up
// O(N) time and O(1) space
// You could think of this as a bottom up memo - we could store all the prev
// results in a memo for O(N) space. But turns out we only actually need the previous 2 results
const fib3 = (n) => {
  if (n === 0 | n === 1) {
    return n;
  }
  let nm1 = 1;
  let nm2 = 0;
  let cur;

  for (let i = 2; i <= n; i++) {
    cur = nm1 + nm2;
    nm2 = nm1;
    nm1 = cur;
  }
  return cur;
};

console.log(fib3(6));