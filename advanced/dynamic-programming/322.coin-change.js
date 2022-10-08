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

/**
 * dp[n] = min(dp[n], 1 + dp[n - coin])
 * dp[0] = 0
 */
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    coins.sort((a, b) => b - a);

    for (let i = 0; i < dp.length; i++) {
        for (const coin of coins) {
            if (i - coin < 0) continue;
            dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
        }
    }

    return dp[amount] === amount + 1 ? -1 : dp[amount];
}

// @lc code=end
