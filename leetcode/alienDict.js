/**
 * 953
 *
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}

 I: array of strings, order string
 O: boolean
 C: listed; seek to optimize
 E: array of 1, order is messed up

 words.length = N
 string lengths = s1, s2, etc.

 iterate through the words list and compare each word to the next
    iterate through strings until first divergent letter or one string ends
        if one string ends, if second string ended before first string, return false
        else return true

        if divergent, check order
        find index in order of both chars
        if i1 < i2, return true, else return fasle

 optimization: make order a hashmap with indices for constant time lookup

*/

 const compare = (word1, word2, letters) => {
  // while loop until either string ends
  let i = 0;
  while (i < word1.length && i < word2.length) {
      if (word1[i] !== word2[i]) {
          // check which index is first
          if (letters[word1[i]] < letters[word2[i]]) {
              return true;
          }
          return false;
      }
      i++;
  }

  if (word1.length > word2.length) {
      return false;
  }
  return true;
}

const isAlienSorted = (words, order) => {
  // array of 1
  if (words.length === 1) {
      return true;
  }

  // make order a hashmap
  const letters = {};
  for (let i = 0; i < order.length; i++) {
      // edge case check
      if (letters[order[i]] !== undefined) {
          throw 'invalid order input';
      }
      letters[order[i]] = i;
  }

  // iterate through words
  for (let i = 0; i < words.length - 1; i++) {
      // call comparator function
      if (!compare(words[i], words[i + 1], letters)) {
          return false;
      }
  }
  return true;
};