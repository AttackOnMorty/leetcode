/*
 * @lc app=leetcode id=322 lang=javascript
 *
 * [322] Coin Change
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// Recursion v1
function coinChange(coins, amount) {
  return dp(amount)

  function dp(amount) {
    if (amount < 0) return -1
    if (amount === 0) return 0
    let res = Infinity
    for (const coin of coins) {
      const subProblem = dp(amount - coin)
      if (subProblem === -1) continue
      res = Math.min(res, 1 + subProblem)
    }
    return res === Infinity ? -1 : res
  }
}

// Recursion v1: cache
function coinChange(coins, amount) {
  const cache = new Map()
  return dp(amount, cache)

  function dp(amount) {
    if (amount < 0) return -1
    if (amount === 0) return 0
    if (cache.has(amount)) return cache.get(amount)
    let res = Infinity
    for (const coin of coins) {
      const subProblem = dp(amount - coin)
      if (subProblem === -1) continue
      res = Math.min(res, 1 + subProblem)
    }
    cache.set(amount, res === Infinity ? -1 : res)
    return cache.get(amount)
  }
}

// DP
function coinChange(coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let i = 0; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin < 0) continue
      const temp = 1 + dp[i - coin]
      dp[i] = Math.min(dp[i], temp)
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}

// @lc code=end
