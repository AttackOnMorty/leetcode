/*
 * @lc app=leetcode id=931 lang=javascript
 *
 * [931] Minimum Falling Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */

// dp[row][col] += min(dp[row-1][col-1], dp[row-1][col], dp[row-1][col+1])

// O(n^2) / O(1)
function minFallingPathSum(matrix) {
  const n = matrix.length;

  matrix.forEach((array) => {
    array[-1] = Infinity;
    array[n] = Infinity;
  });

  for (let row = 1; row < n; row++) {
    for (let col = 0; col < n; col++) {
      matrix[row][col] += Math.min(
        matrix[row - 1][col - 1],
        matrix[row - 1][col],
        matrix[row - 1][col + 1]
      );
    }
  }

  return Math.min(...matrix[n - 1]);
}

// @lc code=end
