/* Given a directed graph, design an algorithm to find out whether there is a route between two nodes

I: 2 nodes
O: boolean representing path found or not
C: optimize space and time
E: unconnected nodes, etc.

Strategy: Can search graphs using DFS or BFS.
BFS is generally better for finding paths between nodes (unsure why)
A bidirectional search would probably be the ideal implementation of this but let's start with the brute force approach

DFS may be simpler to implement, but BFS will check all neighbors first, instead of going down a branch all the way, so it may be quicker to find if there's a path or not (is there no way to quantify this? Try to avoid making this statement if you can't back it up)

Time complexity: O(N) (each node visited once)
Space complexity: O(N) worst case - creating a hash table to store up to all nodes potentially
DFS would also be O(N) because of recursive call stack

*/

// create a queue
// add first node to the queue
// initiate while loop that runs until queue is empty
// dequeue and check if node is the second node
// if yes, return true; function ends
// if no, mark node as visited and move on
// loop through node's children
//    check if they have been visited already
//    if not, enqueue them
// if loop ends, return false

const Queue = require('./queue.js');

const isRoute = (node1, node2) => {
  const queue = new Queue;
  queue.enqueue(node1);

  while (queue.size()) {
    const node = queue.dequeue();
    if (node === node2) {
      return true;
    }
    for (let i = 0; i < node.adjacents; i++) {
      if (!node.adjacents[i].visited) {
        queue.enqueue(node.adjacents[i]);
      }
    }
    node.visited = true;
  }

  return false;
};