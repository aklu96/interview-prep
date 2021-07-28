/*
LL's lend themselves to recursion but recursion takes up space in the call stack. The optimal solution for space is iteration in this case, because pointers take up O(1) space as well

This is also a more accurate use of the word "pointer", since you have an actual variable the points there and is updated. You don't have this with recursion in the same sense.
*/

const getKthFromEnd = (head) => {
  let p1 = head;
  let p2 = head;

  // move p1 up k elements
  for (let i = 0; i < k; i++) {
    p1 = p1.next;
  }

  // move them both until p1 hits the end; p2 will point to the right element at that time
  // perfect use of a while loop here which i don't use that often!! keep an eye out for this
  while (p1.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p2;
}