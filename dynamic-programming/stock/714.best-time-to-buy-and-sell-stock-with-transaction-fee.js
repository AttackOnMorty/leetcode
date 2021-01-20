/*
 * @lc app=leetcode id=714 lang=javascript
 *
 * [714] Best Time to Buy and Sell Stock with Transaction Fee
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

function maxProfit(prices, fee) {
  let dp_i_0 = 0
  let dp_i_1 = -Infinity
  for (const price of prices) {
    const temp = dp_i_0
    dp_i_0 = Math.max(dp_i_0, dp_i_1 + price)
    dp_i_1 = Math.max(dp_i_1, temp - price - fee)
  }
  return dp_i_0
}

// @lc code=end
