/**
 * 53
 *
 * @param {number[]} nums
 * @return {number}

 I: array of integers
 O: sum of subarray
 C: aim for O(N) time complexity
 E: none

 BF: for every element, iterate through each remaining element and keep track of the one with the largest sum

 what insights can we gather here to optimize?
 Positive numbers increase sums, negative numbers decrease them
 Is having two pointers a possibility?

 [1, 2, 3, 4]
 [1], [1, 2], [2, 3], [3, 4], [1, 2, 3], [2, 3, 4], all

 We can use dynamic programming. What's the repetitive problem we can build on? Any subarray that is positive is worth keeping;
 any that isn't, we want to discard

 I'm actually not sure how this is dynamic programming. This is similar to the stock question where we want to keep track of two things -
 the max subarray sum and the current sub array sum. If the current sub array sum dips below 0,
 we would restart the sub array at the next element.

 The idea of restarting the sub array handles it from both directions i guess

 what about negatives? [-1, -2, -4]
 if they're all negative, we would just return the highest negative.


 */
 var maxSubArray = function(nums) {
  let curMax = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
      // negative case - if both are negative, keep smallest abs val negative; else update to positive
      if (curMax < 0) {
          if (nums[i] > curMax) {
              curMax = nums[i];
              max = curMax;
          }
          continue;
      }

      // positive case
      if (curMax + nums[i] > 0) {
          curMax += nums[i];
      } else {
          curMax = 0;
      }
      if (curMax > max) {
          max = curMax;
      }
  }
  return max;
};