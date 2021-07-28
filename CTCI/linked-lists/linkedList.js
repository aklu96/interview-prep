// you basically need something to make new nodes and something to add nodes to the list and have pointers to head and tail

// various ways to implement - here i'll implement it where LL class is the interface for user to find, remove add, etc.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail() {
    // constant time
  }

  remove() {
    // linear time
  }

  search() {
    // linear time
  }
}