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
