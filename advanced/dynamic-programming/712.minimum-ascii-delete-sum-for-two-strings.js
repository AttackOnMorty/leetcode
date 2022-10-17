/*
 * @lc app=leetcode id=712 lang=javascript
 *
 * [712] Minimum ASCII Delete Sum for Two Strings
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */

function minimumDeleteSum(s1, s2) {
    //           101 97  116
    //           e   a   t
    //       0   101 198 314
    // 115 s 115 216 313 429
    // 101 e 216 115 212 328
    // 97  a 313 212 115 231
    const m = s1.length;
    const n = s2.length;
    const dp = [...Array(m + 1)].map((_) => Array(n + 1));

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 && j === 0) {
                dp[0][0] = 0;
            } else if (i === 0) {
                dp[0][j] = dp[0][j - 1] + s2[j - 1].charCodeAt();
            } else if (j === 0) {
                dp[i][0] = dp[i - 1][0] + s1[i - 1].charCodeAt();
            } else if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + s1[i - 1].charCodeAt(),
                    dp[i][j - 1] + s2[j - 1].charCodeAt()
                );
            }
        }
    }

    return dp[m][n];
}

// @lc code=end
