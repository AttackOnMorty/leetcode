/*
 * @lc app=leetcode id=583 lang=javascript
 *
 * [583] Delete Operation for Two Strings
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// O(m * n) / O(m * n)
function minDistance(word1, word2) {
    //     e a t
    //   0 1 2 3
    // s 1 2 3 4
    // e 2 1 2 3
    // a 3 2 1 2
    const m = word1.length;
    const n = word2.length;
    const dp = [...Array(m + 1)].map((_) => Array(n + 1));

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j;
            } else if (j === 0) {
                dp[i][j] = i;
            } else if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }

    return dp[m][n];
}

// @lc code=end
