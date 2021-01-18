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

function maxProfit(prices) {
  const n = prices.length
  let dp_i10 = 0
  let dp_i11 = -Infinity
  let dp_i20 = 0
  let dp_i21 = -Infinity
  for (const price of prices) {
    dp_i20 = Math.max(dp_i20, dp_i21 + price)
    dp_i21 = Math.max(dp_i21, dp_i10 - price)
    dp_i10 = Math.max(dp_i10, dp_i11 + price)
    dp_i11 = Math.max(dp_i11, -price)
  }
  return dp_i20
}

// @lc code=end
