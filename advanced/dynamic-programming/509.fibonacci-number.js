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

// O(n) / O(n)
function fib(n) {
    const dp = [];
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

// O(n) / O(1)
function fib(n) {
    if (n <= 1) {
        return n;
    }

    let dp_n_1 = 1;
    let dp_n_2 = 0;
    let dp_n;

    for (let i = 2; i <= n; i++) {
        dp_n = dp_n_1 + dp_n_2;
        dp_n_2 = dp_n_1;
        dp_n_1 = dp_n;
    }

    return dp_n;
}

// @lc code=end
