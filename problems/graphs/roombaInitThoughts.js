/*
Objective:
Do a graph problem simulating a roomba
Solve using variety of approaches

Model space as a matrix of 0's and 1's
0 is space that needs to be cleaned, 1 represents an obstacle
Can start with a problem of all 0's if we want
Roomba can only move horizontally or vertically
Assumptions:
Roomba starts at 0,0
floor is at least a 1x1 matrix
floor[0][0] = 0

Find a shortest path that cleans every spot
Any path works if there are multiple

What do we return?
We can return a list of coordinates to traverse the area in optimal time

I: matrix
O: array of coords; each coord represented as [i, j] of matrix locations
C: listed; optimize for time and space
E:
- 1x1 matrix may need to be handled differently
- no path to finish line

modeling the problem:
this is a graph problem represented as a matrix
each point in the matrix is a vertex in the graph
each vertex has between 2-4 edges, so the rel'n between v & e is linear
graph is undirected
edges are unweighted

solution:
since searching for shortest path, use BFS
since edges are unweighted, the first solution we find through BFS will be the shortest path (or one of several equivalent shortest paths)
since we want to return a list of coordinates, we may have to save and update an array of coordinates for each node as we move through the graph
furthermore, we'll have to check to make sure whether nodes have been visited in a specific search already or not
this may mean having a coords map for each node as well

cleanedCoords = {
  'i,j': true/false
};

path = [[i1, j1], [i2, j2],...];

implement our BFS algorithm using a queue
likely use a helper function to test and update our nodes within the queue
our test: whether every coord has been cleaned. we can likely do this by using another matrix for each path instead of a hashmap

time and space complexity
By searching all paths, we're building a tree of paths that are compared
at most, the roomba can make 3 moves at any point, so complexity is < O(n^3) if n is the number of vertices

*/

// implement a Queue class for our BFS
class Queue {
  // a line has a front and an end
  // we remove from the front and add to the end
  // store all queue elements in storage and maintain front and end pointers
  constructor() {
    this.front = 0;
    this.end = 0;
    this.storage = {};
  }

  enqueue(value) {
    if (!this.end) {
      this.storage[1] = value;
      this.end = 1;
      this.front = 1;
      return;
    }

    this.end++;
    this.storage[this.end] = value;
  }

  dequeue() {
    const value = this.storage[this.front];
    delete this.storage[this.front];
    if (this.front === this.end) {
      this.front = null;
      this.end = null;
      return value;
    }
    this.front++;
    return value;
  }
}
