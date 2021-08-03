/**
 * O(1) time to look up, add, remove edge
 * O(v^2) space
 * O(v) to add a vertex - add to end of each array, and new array at the bottom
 * O(v^2) to remove a vertex and update the arrays. tbh i feel like you should
 * just leave them "blank"/undefined and that keeps it at O(v)
 *
 * In either case, this is good for edge lo
*/

const graph = [
//       A  B  C  D
/* A */ [0, 1, 0, 0],
/* B */ [1, 0, 0, 0],
/* C */ [0, 0, 0, 1],
/* D */ [0, 0, 1, 0]
];