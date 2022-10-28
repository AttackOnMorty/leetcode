/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// O(n) / O(n)
function climbStairs(n) {
    const dp = [];

    dp[1] = 1;
    dp[2] = 2;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// O(n) / O(1)
function climbStairs(n) {
    if (n === 1 || n === 2) {
        return n;
    }

    let dp_n_1 = 2;
    let dp_n_2 = 1;
    let dp_n;

    for (let i = 3; i <= n; i++) {
        dp_n = dp_n_1 + dp_n_2;
        dp_n_2 = dp_n_1;
        dp_n_1 = dp_n;
    }

    return dp_n;
}

// @lc code=end
