/**
 * 4
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}

 want to do it in log(m+n) time or log(m) + log(n) time [leetcode is wrong sometimes]
 [1, 2, 4, 6, 6, 10, 15]
 odd length: middle index
 even length: half of middle 2 indices

 I: 2 arrays
 O: integer -> median
 C: listed, O(log(m + n)) time complexity
 E: either array can be empty

 if we have all nums sorted in one array, finding median should be O(1)

 BF -> (n+m)*log(m+n)
 2 -> O(n+m)

 [1, 3, 5, 6, 7, 8]

 [12, 14, 19]

 [1, 2, 3, 4, 5, 6, 7, 8, 9]

 length 9
 looking for 5th biggest value

 median is relevant to index

 len1 = 9 -> median is ind 5
 len2 = 5 -> median is ind 3

 median of merged sorted array is ind len / 2

 Okay the solution for this is crazy and has a ton of weird stuff in  implementation, but my basic instinct was correct:

 Compare medians/midpoints of functions and discard halves and recursively go down until you find the median.

*/
var findMedianSortedArrays = function(nums1, nums2) {

};