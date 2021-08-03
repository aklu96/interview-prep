/*

--- POST SOLVING NOTES ---
Modeled this problem in NP way
Time complexity upper bound is probably O(n*4^n) but less in practice,
especially for small matrices


So how is the roomba different from shortest path?

For a roomba, we want to make sure that every spot is cleaned.
So thinking twice, we don't actually need to find the shortest path.

We need to think about how to define the question.

case 1: no obstacles
what are our actual requirements? This is where you should have started, instead of immediately jumping to shortest path
Reqs: every spot has to be gone over at least once
W/ no obstacles, roomba should never go back on the same spot
This changes with obstacles, and there are cases where it would need to take steps backwards
It doesn't need to end on the last square - it ends when all squares have been visited

We want to return the minNumSteps required to clean every space
This is different from shortest path because a roomba can go back over previously visited squares if need be

let's make an assumption - all squares CAN be cleaned (we set up the room well beforehand!). this avoids loops

in this case, we will get a solution if we check every possible path
however, i'm not sure if there are assumptions we can make that can optimize our process

in min num steps, you only have to check every node once because every node has a minimum number of steps, and the next node is always 1 more than that
in other words, you're memoizing the minNumSteps at each node, instead of exhaustively searching every path to completion

Is there anything we can memoize here?
If not, in the worst case we have something like O(n^4), because at every node there are at most 4 moves the roomba can make
perhaps we can add optimizations that say it only goes over its previous path if there are no alternatives - does this help the complexity, though?

Let's solve brute force first

each path has its own memo
ending condition: every number is a 1 in the memo
we can avoid making this an O(n) operation if we count all the 0's at first and decrement them until 0

at each node, push into queue all neighbors that are not obstacles or out of bounds
each node should also have an array of cleaned & uncleaned spots, number of steps taken, and number of 0's left

*/

const Queue = require('../../data-structures/queue.js');

const countDirty = (floor) => {
  const numSquares = floor.length * floor[0].length;
  let obstacles = 0;
  for (let i = 0; i < floor.length; i++) {
    for (let j = 0; j < floor[i].length; j++) {
      if (floor[i][j] === 1) obstacles++;
    }
  }
  return numSquares - obstacles;
};

const deepCopyMatrix = (matrix) => {
  const copy = [];
  for (let i = 0; i < matrix.length; i++) {
    copy[i] = matrix[i].slice();
  }
  return copy;
};

const updateNeighbors = (node, floor, queue) => {
  // pass each of the node's viable neighbors into the queue as a new node with new memo [O(n) operation]
  const { i, j } = node;
  // perform extra check for neighbors that change the i level
  if (floor[i + 1] !== undefined && floor[i + 1][j] === 0) {
    const newNode = Object.assign({}, node);
    newNode.i++;
    newNode.cleaned = deepCopyMatrix(node.cleaned);
    queue.enqueue(newNode);
  }
  if (floor[i - 1] !== undefined && floor[i - 1][j] === 0) {
    const newNode = Object.assign({}, node);
    newNode.i--;
    newNode.cleaned = deepCopyMatrix(node.cleaned);
    queue.enqueue(newNode);
  }
  if (floor[i][j + 1] === 0) {
    const newNode = Object.assign({}, node);
    newNode.j++;
    newNode.cleaned = deepCopyMatrix(node.cleaned);
    queue.enqueue(newNode);
  }
  if (floor[i][j - 1] === 0) {
    const newNode = Object.assign({}, node);
    newNode.j--;
    newNode.cleaned = deepCopyMatrix(node.cleaned);
    queue.enqueue(newNode);
  }

};

const roombaNumSteps = (floor) => {
  // initialize cleaned tracker
  const cleaned = deepCopyMatrix(floor);
  // init num of dirty squares
  const numDirty = countDirty(floor);
  // init queue
  const queue = new Queue();
  // represent node as an object with coordinates, memo, and counter vars
  const startNode = {
    i: 0,
    j: 0,
    cleaned,
    numDirty,
    numSteps: -1
  };
  queue.enqueue(startNode);

  // monte carlo
  let count = 0;

  // given our assumptions, this loop will end with a solution
  while (true) {
    // grab our node
    const node = queue.dequeue();

    // mark it as cleaned if it wasn't already cleaned, and decrement numDirty if so
    if (node.cleaned[node.i][node.j] === 0) {
      node.cleaned[node.i][node.j] = 1;
      node.numDirty--;
    }

    // update numSteps either way
    node.numSteps++;
    // console.log(node);

    // check if this node gives us a solution (will be the shortest path since BFS)
    count++;
    if (node.numDirty === 0) return [node.numSteps, count];

    // helper to update neighbors into the queue
    updateNeighbors(node, floor, queue);
  }
};

// n = 4, count = 6
console.log(roombaNumSteps([
  [0, 0],
  [0, 0]
]), 'time complexity:', 4*3**4);

// n = 6, count = 32 or 35
console.log(roombaNumSteps([
  [0, 0],
  [0, 0],
  [0, 0]
]), 'time complexity:', 6*4**6);

// n = 9, count = 1089
console.log(roombaNumSteps([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]), 'time complexity:', 9*4**9);

// n = 12, count = 40041
console.log(roombaNumSteps([
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
]), 'time complexity:', 12*4**12);

// n = 16, JS heap out of memory
console.log(/*roombaNumSteps([
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]),*/ 'time complexity:', 16*4**16);

/* get creative
console.log(roombaNumSteps([
  [0, 0, 1],
  [0, 1, 1],
  [0, 0, 0]
]));
*/
