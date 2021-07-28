/**
 * I: array nums, integer target
 * O: indices of two numbers such that they add up to target
 * C:
 *    assume only one sol'n
 *    cannot use same element twice
 * E: will return for sake of time
 *
 * BF: O(N^2)
 * Optimized - use hash maps!! ALWAYS REMEMBER TO THINK IF A HASH MAP WILL HELP!
 * And call them hashmaps not objects.
 * The point of a hash map is to save a variable for constant look up time
 *
 * How to solve in one pass: just add to hash map as you go through your iteration, same effect
 *
*/

const twoSum = (nums, target) => {
  // iterate through once to create a hashmap
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    // handle multiple values by creating a sorted array of indices
    const num = nums[i];
    if (hashMap[num] === undefined) {
      hashMap[num] = [i];
    } else {
      hashMap[num].push(i);
    }
  }

  // iterate to find sol'n
  for (let i = 0; i < nums.length; i++) {
    const rem = target - nums[i];

    // constant time lookup
    if (hashMap[rem]) {

      // confirm that it's not the same number by iterating through indices at object
      for (let j = 0; j < hashMap[rem].length; j++) {

        if (hashMap[rem][j] !== i) {
          return [i, hashMap[rem][j]];
        }
      }
    }
  }
};

console.log(twoSum([3, 2, 5, 1, 2, 2, 4], 9));
