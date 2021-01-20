/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
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


k = Infinity
dp[i][0] = Math.max(dp[i - 1][k][0], dp[i - 1][1] + prices[i])
dp[i][1] = Math.max(dp[i - 1][k][1], dp[i - 1][0] - prices[i])
*/

function maxProfit(prices) {
  let dp_i_0 = 0
  let dp_i_1 = -Infinity
  for (const price of prices) {
    const temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + price)
    dp_i_1 = Math.max(dp_i_1, temp - price)
  }
  return dp_i_0
}

// @lc code=end
