/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

// O(n) / O(n)
function maxProfit(prices) {
    const n = prices.length;
    const dp = [...Array(n)].map((_) => []);

    dp[0][0] = 0;
    dp[0][1] = -prices[0];

    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i - 1][1], -prices[i]);
    }

    return dp[n - 1][0];
}

// @lc code=end
