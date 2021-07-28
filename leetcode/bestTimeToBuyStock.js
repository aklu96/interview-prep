// 121

var maxProfit = function(prices) {
  let min = prices[0];
  let maxProf = 0;
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < min) {
          min = prices[i];
      }
      if (prices[i] - min > maxProf) {
          maxProf = prices[i] - min;
      }
  }
  return maxProf;
};