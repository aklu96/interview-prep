/*

refresh ES6 classes

I: root node of a BST
O: value of the second largest node in the tree
C: optimize for time/space
E: one node -> return its value

find the rightmost node
if it has a left node, rightmost of that subtree
if not, its parent node

helper function to find rightmost node
pointer to parent node

*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const findRightmost = (node, parent) => {

  // base case - no right child
  if (node.right === null) {
    return [node, parent];
  }

  return findRightmost(node.right, node);
}

const findSecondLargest = (root) => {
  // edge case of no children
  if (root.left === null && root.right === null) {
    return root.value;
  }

  // parent pointer
  let parent = root;
  let max;

  [max, parent] = findRightmost(root, root);

  if (max.left !== null) {
    const [secondLargest] = findRightmost(max.left);
    return secondLargest.value;
  }

  return parent.value;
};

const root = new Node(4);
root.right = new Node(8);
root.right.right = new Node(12);
root.right.right.left = new Node(9);
root.right.right.left.right = new Node(10);
console.log(findSecondLargest(root));