/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}

 I: root node
 O: integer of longest path
 C: listed; optimize
 E: not a node

 return object since you're returning 2 things
 prefer not to update state if you can avoid it (best not to mutate inputs)
 tree problems -> do top-down
 "let's say i already have it for left and right - how do i find the solution for this node"
 can use this approach for other problems that aren't actual BSTs
 can always retrofit base cases, don't make that the focus

 base case
 .left & .right are null, return diameter = 0 & length = 0;

 recursive case
 if node !== null return [0, 0]

 if .left.length + .right.length + 2 > left.diameter & right.diameter,
    update node.diameter; else set node.diameter to higher of left or right

 update node.length w/ left or right's longest length + 1

 */

 var findMaxes = function(node) {
  // base case
  if (node === null) {
      return [-1, -1];
  }

  // recursive case
  // updating max diam and max length
  const [leftDiam, leftLen] = findMaxes(node.left);
  const [rightDiam, rightLen] = findMaxes(node.right);
  const maxLen = Math.max(leftLen, rightLen) + 1;
  const curDiam = leftLen + rightLen + 2;
  const maxDiam = Math.max(leftDiam, rightDiam, curDiam);
  return [maxDiam, maxLen];

}

var diameterOfBinaryTree = function(root) {

  // recursive function (node, maxDiam, maxLen)
  // return max diam and max length
  const [diam, len] = findMaxes(root);
  return diam;
};