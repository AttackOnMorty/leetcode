/*
 * @lc app=leetcode id=309 lang=javascript
 *
 * [309] Best Time to Buy and Sell Stock with Cooldown
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


k = Infinity && one day cooldown
dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0] - prices[i])
*/

function maxProfit(prices) {
  let dp_i_0 = 0
  let dp_i_1 = -Infinity
  let dp_pre_0 = 0
  for (const price of prices) {
    const temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + price)
    dp_i_1 = Math.max(dp_i_1, dp_pre_0 - price)
    dp_pre_0 = temp
  }
  return dp_i_0
}

// @lc code=end
