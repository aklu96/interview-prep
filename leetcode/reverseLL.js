/**
 * 206
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}

 iterative sol'n: O(N) time, O(1) space

 */

// iterative solution
var reverseListIterative = function(head) {
    // edge cases: 0 or 1 nodes
    if (head === null || head.next === null) {
        return head;
    }
    // init pointers and update head
    let pL1 = head.next;
    let tail = head;
    head.next = null;

    // loop through while updating the pointers
    while (pL1.next !== null) {
        const temp = pL1.next;
        pL1.next = tail;
        tail = pL1;
        pL1 = temp;
    }
    pL1.next = tail;
    return pL1;
};

// recursive solution
// helper function - given a tail and head node, reverse them and recurse down until end of list, and return new head
var reverseNodes = function(tail, head) {
  // always done
  const temp = head.next;
  head.next = tail;

  // base case
  if (temp === null) {
      return head;
  }
  // recursive case
  return reverseNodes(head, temp);
}

var reverseListRecursive = function(head) {
  // edge cases: 0 or 1 nodes
  if (head === null || head.next === null) {
      return head;
  }

  const temp = head.next;
  head.next = null;
  const newHead = reverseNodes(head, temp);
  return newHead;
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
