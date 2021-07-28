/**
 * 3 towers
 * N disks of different sizes that can slide onto different towers
 * Starting position is disks are on the first tower
 * They are sorted from biggest being on the bottom to smallest on the top
 *
 * Objective: Move the disks to the last tower
 * Constraints:
 *    Can only move one disk at a time
 *    Disks must be moved from one tower to another
 *    Cannot put a disk onto smaller disk at any point
 *
 * Some notes from whiteboarding:
 *
 * Goal is to move the base onto the last tower and then re-fill the last base
 * The recursion here is that to move the base, you have to fill the second tower with the N-1 disks
 * Then move the base
 * Then re-solve the problem by solving N - 1 again from second tower to third tower
 *
 * Our function should be able to solve for specific towers it seems like.
 * 1. Solve N - 1 from t1 -> t2
 * 2. Move base from t1 -> t3
 * 3. Solve N - 1 from t2 -> t3
 *
 * So, what are the specific rules for towers?
 * Let's think through it...
 *
 * n = 1
 * Base t1 to t3
 *
 * n = 2
 * Solve n-1 t1 to t2
 * Base t1 to t3
 * Solve n-1 t2 to t3
 *
 * n = 3
 * solve n-1 t1 to t2
 *    solve n-2 t1 to t3
 * base t1 to t3
 * solve n-1 t2 to t3
 *    solve n-2 t2 to t1
 *
 * n = 4
 * solve n-1 t1 to t2
 *    solve n-2 t1 to t3
 *      solve n-3 t1 to t2
 * base t1 to t3
 * solve n-1 t2 to t3
 *    solve n-2 t2 to t1
 *       solve n-3 t2 to t3
 *
 * So here's the pattern!
 * We have a source tower (st), target tower (tt), and middle tower (mt)
 * To solve st -> tt, we have to solve N - 1 st -> mt, base, then solve N - 1 mt -> tt
 * The ordering of the towers will change as you recurse downwards - but that should take care of itself?
 *
 */

// Recursive helper function that given a source, target, and middle tower,
// will move n elements from the source array to the target array while following the constraints
// st - source tower
// mt - middle tower
// tt - target tower

// initialize towers as stacks (can just use arrays & we'll only use pop and push methods)
// initialize here for logging
const t1 = [];
const t2 = [];
const t3 = [];
let count = 1;

const moveDisks = (n, st, mt, tt) => {

  // base case: n = 0
  if (n === 0) {
    return;
  }

  // recursive case
  // solve n - 1 from st -> mt
  moveDisks(n - 1, st, tt, mt);
  // move base
  tt.push(st.pop());
  console.log([t1, t2, t3], 'moves: ', count++);
  // solve n - 1 from mt -> tt
  moveDisks(n - 1, mt, st, tt);

};

const towersOfHanoi = (n) => {

  // we'll designate the "size" of every disk as a number from n to 1 and make our first tower
  for (let i = n; i >= 1; i--) {
    t1.push(i);
  }

  moveDisks(n, t1, t2, t3);

  return [t1, t2, t3];
}

towersOfHanoi(8);
