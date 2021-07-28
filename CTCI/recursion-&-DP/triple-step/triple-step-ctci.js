/**
 * Top-down approach: you add downwards n-1, n-2, or n-3 steps
 * until you hit your base cases
 *
 * Base cases: n = 0 is a count, n < 0 is a dead end
 *
 * This works similar to fibonacci because of the RECURSIVE CASE:
 * The repetitive task / function is returning the number of sol'ns
 * at n steps left.
 *
 * At each step, we can either take 1, 2, or 3 steps down, so we add up the
 * results from each of those possibilities. Practice thinking this way!
 *
 */

// this function returns the number of solutions
const countPaths = (n) => {

  // base cases:
  // every branch that hits n = 0 is a solution, so we return 1
  if (n === 0) {
    return 1;
  }
  // not a solution if it goes past 0, and we want to stop the recursion
  if (n < 0) {
    return 0;
  }

  // recursive case: add up the respective solutions for
  return countPaths(n - 1) + countPaths(n - 2) + countPaths(n - 3);
}

for (let i = 1 ; i <= 10; i++) {
  console.log(countPaths(i));
}