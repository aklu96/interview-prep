/*
Return Kth to last
I: head node of singly-linked list; integer K
O: node that is K elements from the end of the list
C: optimize space and time
E: assume K is always less than N (total number of nodes)

Strategy:

First thought is having two pointers. One iterates to the end of the list to find the last element, and counts the number of elements N
 - O(N) time, O(N) space

The second pointer iterates and counts until it gets to the node that is the (N - K)th element
 - O(N) time, O(N) space

As concurrent operations, the total complexity is O(N) time and O(N) space (because recursion). I don't think we can optimize further.

By the way, I wouldn't call these pointers. It's more like having two recursive functions that perform an operation vs two actual pointers that are updated in an iterative approach
*/

const countNodes = (node) => {
  let counter = 0;
  // base case; end of list
  if (node.next === null) {
    return counter;
  }
  // recursive case; not end of list
  if (node.next !== null) {
    counter++;
    return counter + countNodes(node.next);
  }
};

const getMth = (node, m) => {
  let counter = 0;
  // base case; counter = m
  if (counter === m) {
    return node;
  }
  // recursive case; counter != m
  if (counter !== m) {
    counter++;
    return counter + getMth(node.next, m);
  }
}

const getKthFromEnd = (head, k) => {
  // helper function to count the number of nodes total (first pointer)
  const n = countNodes(head);
  const m = n - k;

  // second helper function to iterate until the mth element (second pointer)
  return getMth(head, m);
};

// After writing it out: test it, edge cases, check in with interviewer, etc.

// O(N) time & space - ANYTIME THERE IS RECURSION ITS AT LEAST O(N) SPACE BECAUSE OF THE CALL STACK!!