/* Given two strings, write a method to decide if one is a permutation of another

I - two strings
O - boolean; true if permutation, false if not
C - none
E - empty strings

ex:

'abc'
'cba'
or
'cca'

BF:
iterate through first string, make a hash map of characters to number of occurences O(A)
iterate through second string, make a hash map of characters to number of occurences O(B)
check if objects are the same O(max(A, B))

Time: O(max(A,B))
Space: O(max(A,B))

Can optimize for space by deleting characters from both and seeing if we remain with an empty string

However this would require an iteration for every deletion, so O(N^2)

We'll stick with the hash map

*/

const isPermutation = (str1, str2) => {
  const obj1 = {};
  const obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    // check if new character
    // if so, add new k:v pair
    // if not, increment existing character
    obj1[str1[i]] === undefined ? obj1[str1[i]] = 1 : obj1[str1[i]]++;
  }

  for (let i = 0; i < str2.length; i++) {
    obj2[str2[i]] === undefined ? obj2[str2[i]] = 1 : obj2[str2[i]]++;
  }

  // compare that the two objects are unique;
  // check that every k:v pair that exists in obj2 is in obj1
  //    worst case: O(N^2)

};