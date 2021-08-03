// undirected graph implementation
class Graph {
  constructor() {
    this.nodes = {};
  }

  // O(1)
  addNode(val) {
    this.nodes[val] = [];
  }

  // O(V^2)
  removeNode(val) {
    delete this.nodes[val];
    // must remove all edges to that node as well
    for (let i = 0; i < this.nodes.length; i++) {
      this.removeEdge(this.nodes[i], val);
    }
  }

  // O(1)
  // could change this to be directed
  addEdge(node1, node2) {
    this.nodes[node1].push(node2);
    this.nodes[node2].push(node1);
  }

  // O(V)
  removeEdge(node1, node2) {
    const node1Nbrs = this.nodes[node1];
    const node2Nbrs = this.nodes[node2];
    for (let i = 0; i < node1Nbrs.length; i++) {
      if (node1Nbrs[i] === node2) {
        node1Nbrs.splice(i, 1);
      }
    }
    for (let i = 0; i < node2Nbrs.length; i++) {
      if (node2Nbrs[i] === node1) {
        node2Nbrs.splice(i, 1);
      }
    }
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