// Adjacency List
class Vertex {
  constructor(value) {
    this.value = value;
    this.adjacents = [];
  }
}

class Graph {
  constructor(nodes) {
    this.nodes = nodes;
  }
}