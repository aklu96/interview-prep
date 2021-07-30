class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = [];
  }

  // O(1)
  addNeighbor(node) {
    this.neighbors.push(node);
  }

  // O(V)
  removeNeighbor(node) {
    for (let i = 0; i < this.neighbors.length; i++) {
      if (this.neighbors[i] === node) {
        this.neighbors.splice(0, i, 1);
      }
    }
  }
}

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

const node1 = new Node(4);
node1.addNeighbor(6);
console.log(node1);
node1.removeNeighbor