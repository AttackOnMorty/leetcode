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

// O(n) / O(n)
function coinChange(coins, amount) {
    const n = amount + 1;
    const dp = new Array(n).fill(Infinity);

    dp[0] = 0;

    for (let i = 0; i < n; i++) {
        for (const coin of coins) {
            if (i - coin < 0) {
                continue;
            }
            dp[i] = Math.min(dp[i], dp[i - coin]);
        }
    }

    return dp[amount] === Infinity ? -1 : dp[amount];
}

// @lc code=end
