/*
Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth
e.g. if tree is depth D, have D linked lists

I: root node of binary tree
O: a series of linked lists (is there a specified format we want this in?)
C: optimize time and space
E: none

TC: O(N) - iterate through every node is O(N), using hash table and reference to tail to linked list, both of those insertions are O(1)
SC: O(log N) - storage object in queue and in linked list helper function; everything else just passes the same nodes around

First thoughts: we need a breadth-first approach because we have to go through each level fully before going on to the next one

BFS is executing through a queue; we can adapt a queue here as well

Let's say we have a queue class and linked list class

Pseudocode

Main function
Create storage object - key is depth, value is tail of linked list
Instantiate a queue
add root node to queue
make a depth variable = 0, set root node.depth = 0
while queue is not empty
  dequeue first node and set it equal to a variable
  if node has children:
    give them a depth value 1 above the current node
    add them to queue
  call helper function on node and set the storage object equal to the return value


Helper function (node, storage)
Check if node's depth exists as key
If not
  create one and set the value to the node
  set the node's next prop = null
If so
  take the current tail's node.next and set equal to current node
  update tail to current node
Return new state of object
*/

const Queue = require('./queue.js');
// bring in a BST for testing
const BST = require('./binaryTrees.js');

const addToStorage = (node, storage) => {
  if (storage[node.depth]) {
    // if it exists
    // update node.next
    storage[node.depth].tail.next = node;
    // add to tail
    storage[node.depth].tail = node;
  } else {
    // if it's undefined
    node.next = null;
    storage[node.depth] = {
      head: node,
      tail: node
    };
  }
  return storage;
};

const binaryToLinkedList = (root) => {
  const storage = {};
  const queue = new Queue;
  root.depth = 0;
  queue.enqueue(root);

  while (queue.size()) {
    const node = queue.dequeue();
    if (node.left) {
      node.left.depth = node.depth + 1;
      queue.enqueue(node.left);
    }
    if (node.right) {
      node.right.depth = node.depth + 1;
      queue.enqueue(node.right);
    }
    addToStorage(node, storage);
  }

  return storage;
};

console.log(binaryToLinkedList(BST.root));
