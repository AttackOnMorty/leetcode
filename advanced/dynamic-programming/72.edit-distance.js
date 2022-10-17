/*
 * @lc app=leetcode id=72 lang=javascript
 *
 * [72] Edit Distance
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

// O(m * n) / O(m * n)
function minDistance(word1, word2) {
    //     r o s
    //   0 1 2 3
    // h 1 1 2 3
    // o 2 2 1 2
    // r 3 2 2 2
    // s 4 3 3 2
    // e 5 4 4 3
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
                dp[i][j] =
                    1 + Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]);
            }
        }
    }

    return dp[m][n];
}

// @lc code=end
