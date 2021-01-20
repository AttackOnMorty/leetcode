/*
 * @lc app=leetcode id=123 lang=javascript
 *
 * [123] Best Time to Buy and Sell Stock III
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

k = 2
dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][2][1] + prices[i])
dp[i][2][1] = Math.max(dp[i - 1][2][1], dp[i - 1][1][0] - prices[i])
dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][1][1] + prices[i])
dp[i][1][1] = Math.max(dp[i - 1][1][1], -prices[i])
*/

function maxProfit(prices) {
  let dp_i20 = 0
  let dp_i21 = -Infinity
  let dp_i10 = 0
  let dp_i11 = -Infinity
  for (const price of prices) {
    dp_i20 = Math.max(dp_i20, dp_i21 + price)
    dp_i21 = Math.max(dp_i21, dp_i10 - price)
    dp_i10 = Math.max(dp_i10, dp_i11 + price)
    dp_i11 = Math.max(dp_i11, -price)
  }
  return dp_i20
}

// @lc code=end
