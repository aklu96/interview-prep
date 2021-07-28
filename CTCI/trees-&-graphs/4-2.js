/* Given a sorted array of unique integers in increasing order, write an algorithm to create a binary search tree with minimal height (height-balanced)

I: array
      sorted in increasing order, unique integers
O: root node
      side effect: height-balanced BST
C: optimize space and time
E: assume none

whiteboard in notebook

can be not complete - just minimum height

divide length of array by 2 and round down; that index will be the root of the tree
split up both sides of the array and repeat the process

Hypothesis: O(N^2) time and O(N) space
O(N) if you ignore the slice/splice part which may just a javascript implementation thing; unsure

BF: create a new array for each recursive call

*/

const Node = require('./binaryTrees.js');

const createBST = (arr) => {
  // base case: array is empty
  if (arr.length === 0) {
    return null;
  }

  // take middle value and make it a node
  const middle = Math.floor(arr.length / 2);
  const node = new Node(arr[middle]);

  // get left and right arrays - this is O(N) time but O(1) space since it never takes up more space than the initial array I think?
  const left = arr.splice(0, middle);
  const right = arr.splice(1, arr.length - 1);

  // set left and right values of node equal to the result of recursively calling that array
  // Depth first approach so it's O(N) space in the call stack
  node.left = createBST(left);
  node.right = createBST(right);

  // return node, which will be the root
  return node;
};

console.log(createBST([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

/* step back: what's the recursive activity?

we're receiving one array
if empty, return null
taking the middle value and making it a node
splitting the array into left and right components
setting the left child of node to recursive call of left array
setting the right child of node to recursive call of right array
returning the node */