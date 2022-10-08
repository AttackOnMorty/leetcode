/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

/**
 * dp[n] = dp[n-1] + d[n-2]
 * dp[0] = 0, dp[1] = 1
 */
function fib(n) {
    const dp = [];

    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// @lc code=end
