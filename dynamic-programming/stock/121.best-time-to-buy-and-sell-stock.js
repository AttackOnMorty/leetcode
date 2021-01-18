/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// O(n) / O(n)
function maxProfit(prices) {
  const dp = []
  const n = prices.length
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      addToDP(0, i, 0)
      addToDP(-prices[0], i, 1)
      continue
    }
    addToDP(Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]), i, 0)
    addToDP(Math.max(dp[i - 1][1], -prices[i]), i, 1)
  }
  return dp[n - 1][0]

  function addToDP(item, i, j) {
    if (dp[i] === undefined) dp[i] = []
    dp[i][j] = item
  }
}

// O(n) / O(1)
function maxProfit(prices) {
  let dp_i_0 = 0
  let dp_i_1 = -Infinity
  for (const price of prices) {
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + price)
    dp_i_1 = Math.max(dp_i_1, -price)
  }
  return dp_i_0
}

// @lc code=end
