/*

general approach for finding the shortest path in a graph
BFS since you'll get there fastest
keep track of whatever you need to return
for example, if you're looking to return the number of steps, just keep track of the value
however, we don't need to compare every node for shortest path. we just need to know the numSteps for that square
you need to practice thinking in this way instead of mapping every possible permutation

using BFS, every unvisited node would be the shortest path to that node by definition, so you don't need to visit any node
more than once. This makes it O(N). Unsure how this would apply to roomba problem

I: matrix of 0's and 1's
O: num steps in shortest path or -1 if no path
C: can only move horizontally or vertically, at least 1x1, don't modify input, matrix[0][0] = 0, assume rectangular input (these are all clarifying questions you should ask)
E: none

sol'n: BFS

*/

const Queue = require('../../data-structures/queue.js');

const getVars = (nodeCoords, memo) => {
  const i = nodeCoords[0];
  const j = nodeCoords[1];
  return [i, j, memo[i][j]];
};

const checkNode = (nodeCoords, matrix, memo) => {
  const [i, j, minNumSteps] = getVars(nodeCoords, memo);

  const maxI = matrix.length - 1;
  const maxJ = matrix[0].length - 1;
  if (i === maxI && j === maxJ) return [true, minNumSteps];
  return [false];
};

const updateNeighbors = (nodeCoords, matrix, memo, queue) => {
  const [i, j, minNumSteps] = getVars(nodeCoords, memo);
  // check four possible neighbors
  // a neighbor is valid if it's a 0 (not 1 or undefined, i.e. outside the matrix)
  // and it is undefined in the memo (hasn't been visited yet)
  if (matrix[i - 1] !== undefined && matrix[i - 1][j] === 0 && memo[i - 1][j] === undefined) {
    memo[i - 1][j] = minNumSteps + 1;
    queue.enqueue([i - 1, j])
  }
  if (matrix[i][j + 1] === 0 && memo[i][j + 1] === undefined) {
    memo[i][j + 1] = minNumSteps + 1;
    queue.enqueue([i, j + 1])
  }
  if (matrix[i + 1] !== undefined && matrix[i + 1][j] === 0 && memo[i + 1][j] === undefined) {
    memo[i + 1][j] = minNumSteps + 1;
    queue.enqueue([i + 1, j])
  }
  if (matrix[i][j - 1] === 0 && memo[i][j - 1] === undefined) {
    memo[i][j - 1] = minNumSteps + 1;
    queue.enqueue([i, j - 1])
  }
};

const shortestPathMatrix = (matrix) => {
  // use a different matrix to save inputs to avoid modifying the input [O(N) space and time]
  const memo = [];
  for (let i = 0; i < matrix.length; i++) {
    memo[i] = [];
  }

  // initialize queue and first node
  // represent nodes as array of coordinates
  const queue = new Queue();
  const nodeCoords = [0, 0];
  queue.enqueue(nodeCoords);
  memo[0][0] = 0;

  let count = 0;

  // run loop until queue is empty
  while (queue.size() !== 0) {

    // grab the node in our graph
    const nodeCoords = queue.dequeue();
    // for each node, we want to:
    // 1. check if it's the last node, in which we case we return the answer
    const [isLastNode, minNumSteps] = checkNode(nodeCoords, matrix, memo);
    if (isLastNode) return minNumSteps;

    // 2. update the value of minNumSteps in the memo of each of its neighbors
    // 3. enqueue all of its neighbors
    updateNeighbors(nodeCoords, matrix, memo, queue);
  }

  return -1;
};

console.log(shortestPathMatrix([
  [0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0]
]));