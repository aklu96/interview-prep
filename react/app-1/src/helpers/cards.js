const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];
const suits = ['D', 'C', 'H', 'S'];
const cards = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = 0; j < suits.length; j++) {
    cards.push(nums[i] + suits[j]);
  }
}

export default cards;
