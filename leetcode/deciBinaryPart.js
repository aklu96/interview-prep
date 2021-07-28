/**
 * 1689
 *
 * A deci-binary number is a number that has only 1's and 0's and starts with a 1
 * I: a string n that represents a number
 * O: a number: min num of positive deci-binary nums needed to sum up to n
 * C: try to perform in optimal time
 * E: input not a string, components not numbers, leading 0's
 *
 * It's the biggest digit
 * Optimize time - should just be one loop
*/

const minDec = (n) => {
  // edge case
  if (typeof n !== 'string' || n[0] === 0) {
    return null;
  }

  let max = 0;
  for (let i = 0; i < n.length; i++) {
    let num = Number(n[i]);

    // edge case
    if (isNaN(num)) {
      return null;
    }

    // keep track of max
    if (num > max) {
      max = num;
    }

    // quick exit
    if (max === 9) {
      return 9;
    }
  }

  return max;
};

console.log(minDec("82734"));