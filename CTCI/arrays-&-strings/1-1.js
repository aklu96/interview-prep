// I - string
// O - boolean; true if all unique, false if not
// C - optimize for no additional data structures
// E - empty string

const isUnique = (str) => {
  // for each character in the string
  for (i = 0; i < str.length; i++) {
    // compare character with every character preceding it
    for (j = 0; j < i; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isUnique('abcdefg'));
console.log(isUnique('abcdebg'));