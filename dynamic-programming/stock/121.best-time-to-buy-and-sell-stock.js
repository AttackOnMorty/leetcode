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

/*
dp[-1][k][0] = 0
dp[-1][k][1] = -Infinity
dp[i][0][0] = 0
dp[i][0][1] = -Infinity

dp[i][k][0] = Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i])
dp[i][k][1] = Math.max(dp[i - 1][k][1], dp[i - 1][k - 1][0] - prices[i])


k = 1
dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
dp[i][1] = Math.max(dp[i - 1][1], - prices[i])
*/

// O(n) / O(n)
function maxProfit(prices) {
  const n = prices.length
  const dp = []
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      addToDP(i, 0, 0)
      addToDP(i, 1, -prices[i])
      continue
    }
    addToDP(i, 0, Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]))
    addToDP(i, 1, Math.max(dp[i - 1][1], -prices[i]))
  }
  return dp[n - 1][0]

  function addToDP(i, j, item) {
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
