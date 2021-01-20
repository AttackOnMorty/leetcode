/*
 * @lc app=leetcode id=188 lang=javascript
 *
 * [188] Best Time to Buy and Sell Stock IV
 */

// @lc code=start
/**
 * @param {number} k
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
*/

function maxProfit(max_k, prices) {
  if (max_k === 0 || prices.length === 0) return 0
  const n = prices.length
  const dp = []
  for (let i = 0; i < n; i++) {
    let temp = 0
    for (let k = 1; k <= max_k; k++) {
      if (i === 0) {
        addToDP(i, k, 0, 0)
        addToDP(i, k, 1, -prices[i])
        console.log(`i: ${i}, k: ${k}`, dp[i][k][0], dp[i][k][1])
        continue
      }
      addToDP(i, k, 0, Math.max(dp[i - 1][k][0], dp[i - 1][k][1] + prices[i]))
      addToDP(i, k, 1, Math.max(dp[i - 1][k][1], temp - prices[i]))
      temp = dp[i - 1][k][0]
    }
  }
  return dp[n - 1][max_k][0]

  function addToDP(i, j, k, item) {
    if (dp[i] === undefined) dp[i] = []
    if (dp[i][j] === undefined) dp[i][j] = []
    dp[i][j][k] = item
  }
}

// @lc code=end
