/**
 * This is probably closest to the idea of "objects and pointers"
 * let's learn about advanced algos and practice some problems to get a better feel for these
*/

// directed graph implementation
class Graph {
  constructor() {
    this.nodes = {};
  }

  // O(1)
  addNode(val) {
    this.nodes[val] = new Set();
  }

  // O(V)
  removeNode(val) {
    delete this.nodes[val];
    // must remove all edges to that node as well
    for (let i = 0; i < this.nodes.length; i++) {
      this.removeEdge(this.nodes[i], val);
    }
  }

  // O(1)
  addEdge(node1, node2) {
    this.nodes[node1].add(node2);
  }

  // O(1)
  removeEdge(node1, node2) {
    this.nodes[node1].delete(node2);
  }
}

const graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
console.log(graph);
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 1);
console.log(graph);
graph.removeEdge(1, 2);
console.log(graph.nodes[1]);