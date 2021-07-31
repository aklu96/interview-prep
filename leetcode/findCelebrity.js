/**
 * 277
 * Found BF solution
 *
 *
 * Definition for knows()
 *
 * @param {integer} person a
 * @param {integer} person b
 * @return {boolean} whether a knows b
 * knows = function(a, b) {
 *     ...
 * };
 */

/**
 * @param {function} knows()
 * @return {function}
 */

/*
I: n

graph = [0, 1, ... n]
graph[i][j] represents whether i knows j
graph is an adjacency matrix
directed graph
knows(i, j) returns true or false depending on if i knows j

O: -1 if no celebrity, or i representing celebrity
C: listed; optimize for time and space
E: none; can revisit later

celebrity definition for A:
every person knows A
A knows nobody

BF:
O(n^2) time complexity
O(1) space complexity

*/

// return true if they don't know anybody else, else false
// O(n)
const knowsNobody = (person, n, knows) => {
  let result = true;
  for (let i = 0; i < n; i++) {
      if (i === person) continue;
      if (knows(person, i)) result = false;
  }
  return result;
}

// return true if everyone knows them, else return false
// O(n)
const everyoneKnows = (person, n, knows) => {
  let result = true;
  for (let i = 0; i < n; i++) {
      if (!knows(i, person)) result = false;
  }
  return result;
}

const solution = (knows) => {
  /**
   * @param {integer} n Total people
   * @return {integer} The celebrity
   */
  return function(n) {
      // iterate through every vertex
      // O(n)
      for (let i = 0; i < n; i++) {
          // for each vertex, see if that person knows nobody else,
          // and see if everyone else knows that person
          // if so, return i
          if (knowsNobody(i, n, knows) && everyoneKnows(i, n, knows)) {
              return i;
          }
      }
      // if loop ends, return -1
      return -1;
  };
};