// get the bit at digit i
// ex: 1101 at 2 = 1; at 1, = 0
//
// GETBIT USES AND
const getBit = (num, i) => {
  // create mask
  const mask = 1 << i;
  // using AND, all bits will turn to 0 except at the mask's 1; this bit will remain unchanged
  // (if 0, it'll stay 0, and vice versa)
  const result = num & mask;
  // move the bit back to the first digit
  return result >> i;
};

console.log(getBit(13, 3));
console.log(getBit(13, 1));

// set the bit at digit i to 1
// ex: 1101 at 2 -> 1101; 1101 at 1 -> 1111
// setBit(13, 2) = 13; setBit(13, 1) = 15;
// SETBIT USES OR
const setBit = (num, i) => {
  // create mask
  const mask = 1 << i;
  // using OR, all digits will remain unchanged except at mask's 1
  // here, it'll stay 1 if it's already 1, or change to 1 if it's 0
  const result = num | mask;
  return result;
};

// console.log(setBit(13, 1));