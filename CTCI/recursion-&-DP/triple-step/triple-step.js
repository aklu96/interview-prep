/**
 * Stair case with N steps
 * Child is running up them
 * Can hop stairs 1, 2, or 3 at a time
 * How many possible was can the child run up the stairs?
 *
 * Thinking of this bottom up:
 * We want to count every iteration of jump possibilities
 * Child can choose to do 1, 2, or 3 step jump on first jump
 * Next jump, the same choice
 * This creates a tree
 * We want to count all outcomes of this tree where the addition of that route equals n
 *
 * I: integer N >= 0
 * O: number of permutations (order matters)
 * C: optimize for time and space
 * E: N = 0 -> return 0
 *
 * BF: Time & space: O(~3^N)
 * May be opportunities for memoization
 */

const countPaths = (n) => {
  // handle edge case and initialize counter
  if (n === 0) {
    return 0;
  }
  let count = 0;
  const jumps = [1, 2, 3];
  let callCount = 0;

  const addJumps = (oldSum) => {
    callCount++;
    jumps.forEach((jump) => {
      // console.log(oldSum, jump);
      // for testing purposes:


      let newSum = oldSum + jump;
      if (newSum === n) {
        count++;
        return;
      }
      if (newSum >= n) {
        return;
      }
      addJumps(newSum);
    });
  };

  addJumps(0);
  return [n, count, callCount];
};

for (let i = 1 ; i <= 10; i++) {
  console.log(countPaths(i));
}
