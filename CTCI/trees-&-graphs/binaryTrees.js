const Queue = require('./queue.js');

// BST not accounting for edge cases
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addChild(node) {
    if (node.value < this.value) {
      this.left = node;
    } else {
      this.right = node;
    }
  }
}

/* ---- DFS METHODS ----

Time complexity: O(N), each node visited once
Space complexity: O(log N), recursive call stack takes up depth
 - How does this change if implemented iteratively?

Fun exercise: implement DFS iteratively using a stack

*/

// log all node values in an in-order traversal pattern
const inOrderTraversal = (node) => {
  if (node.left) {
    inOrderTraversal(node.left);
  }
  console.log(node.value);
  if (node.right) {
    inOrderTraversal(node.right);
  }
}

// log all node values in an pre-order traversal pattern
// root is visited first, then go down a level to the left
const preOrderTraversal = (node) => {
  console.log(node.value);
  if (node.left) {
    preOrderTraversal(node.left);
  }
  if (node.right) {
    preOrderTraversal(node.right);
  }
}

// log all node values in an post-order traversal pattern
// children are visited first; go all the way down, root is visited last
const postOrderTraversal = (node) => {
  if (node.left) {
    postOrderTraversal(node.left);
  }
  if (node.right) {
    postOrderTraversal(node.right);
  }
  console.log(node.value);
}

/* ---- BFS ----

Time complexity:
Space complexity:

BFS is implemented iteratively through the use of a queue

*/

// recall that queues are FIFO
const BFS = (root) => {
  const queue = new Queue;
  // enqueue is a fancy word for adding to the end of the queue
  queue.enqueue(root);

  while (queue.size()) {
    // grab the node at the beginning of the line
    // in the first iteration, this will be the root
    const node = queue.dequeue();
    console.log(node.value);
    queue.enqueue(node.left);
    queue.enqueue(node.right);
  }
}

const root = new Node(5);
root.addChild(new Node(3));
root.left.addChild(new Node(2));
root.left.addChild(new Node(4));
root.addChild(new Node(7));
root.right.addChild(new Node(6));
root.right.addChild(new Node(8));
// inOrderTraversal(root);
// preOrderTraversal(root);
// postOrderTraversal(root);
// BFS(root);

module.exports = {
  Node,
  root
};
