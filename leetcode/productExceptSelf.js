/**
 * @param {number[]} nums
 * @return {number[]}

 just trying to do quick one here, will just think conceptually

 BF: n^2, iterate through whole array on each iteration to multiply
 [1, 2, 3, 4]
 1 -> 234
 2 -> 134
 3 -> 124
 4 -> 123

 Iterate left to right and right to left
 {
    R2L: {
        3: 1
        2: 4
        1: 12
        0: 24
    },
    L2R: {
        0: 1
        1: 1
        2: 2
        3: 6
    }
 }

 */
 var productExceptSelf = function(nums) {

};