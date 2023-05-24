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

// dp[n] = min(dp[n], 1 + dp[n - coin])
// dp[0] = 0

// O(n * m) / O(n)
function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 1; i < dp.length; i++) {
    for (const coin of coins) {
      if (i - coin < 0) continue;
      dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
}

// @lc code=end
