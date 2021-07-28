/**
 * Given two non-empty LL
 * Each node stores one digit
 * Each LL represents a number in reverse order if you combine the digits
 * Return an LL representing the sum of these two numbers in the same format
 *
 * Ex: 342 + 465 = 807.
 * 2 -> 4 -> 3
 * 5 -> 6 -> 4
 * O: 7 -> 0 -> 8
 *
 * No leading 0's other than 0 itself
 *
 * This represents how we do normal addition - starting from the end of the digits and carrying over the 1
 * Ex: 999 + 999
 * 18 -> carry the 1 -> leave the 8
 * 19 -> carry the 1 -> leave the 9
 *
 * If one number ends before the other, just replace with 0's
 *
 * We'll need a recursive function to iterate through the nodes
 * Let's use a while loop instead to save space in the recursive call stack
 *
 * TC: O(N), SC: O(1) where N is the length of the longer LL
 *
 * Edge cases: emtpy arrays, not an integer, etc.
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

const add = (num1, num2, carry) => {
  let sum = num1 + num2;

  // if there's a carried 1 from last digit, add it here
  if (carry) {
    sum += 1;
  }

  // if 1 needs to be carried for next digit, handle it here
  if (sum >= 10) {
    sum -= 10;
    carry = true;
  } else {
    carry = false;
  }

  return [sum, carry];
}

const handleDiffLengths = (n1, n2) => {
  if (n1 === null && n2 !== null) {
    n1 = {
      val: 0,
      next: null
    };
  } else if (n1 !== null && n2 === null) {
    n2 = {
      val: 0,
      next: null
    };
  }
  return [n1, n2];
}

const addTwoNums = (l1, l2) => {
  // init var to carry the 1 and first sum
  let [secondDigit, carry] = add(l1.val, l2.val);
  const sum = new ListNode(secondDigit);
  let n1 = l1.next;
  let n2 = l2.next;
  let s = sum;

  // must handle here as well if array is only 1 in length
  [n1, n2] = handleDiffLengths(n1, n2);

  // will update later to handle different lengths
  while (n1 !== null && n2 !== null) {
    [secondDigit, carry] = add(n1.val, n2.val, carry);
    s.next = new ListNode(secondDigit);

    n1 = n1.next;
    n2 = n2.next;
    s = s.next;

    // handle different lengths
    [n1, n2] = handleDiffLengths(n1, n2);
  }

  // handle case of extra 1 after all numbers are completed
  if (carry) {
    s.next = new ListNode(1);
  }

  return sum;
};

// const l1 = new ListNode(9, new ListNode(9));
// const l2 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))));

const l1 = new ListNode(9, new ListNode(9, new ListNode(1)));
const l2 = new ListNode(1);

const sum = addTwoNums(l1, l2);
const arr = [sum.val];
let s = sum.next;
while (s !== null) {
  arr.push(s.val);
  s = s.next;
}

console.log('l1', l1, '\nl2', l2, '\nsum', sum);
console.log(arr);
