/*
 * @lc app=leetcode id=304 lang=javascript
 *
 * [304] Range Sum Query 2D - Immutable
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 */

// O(m * n) / O(m * n)
function NumMatrix(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;

  this.prefixSum = [...Array(m + 1)].map((_) => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      this.prefixSum[i][j] =
        this.prefixSum[i][j - 1] +
        this.prefixSum[i - 1][j] -
        this.prefixSum[i - 1][j - 1] +
        matrix[i - 1][j - 1];
    }
  }
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */

// O(1) / O(1)
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  return (
    this.prefixSum[row2 + 1][col2 + 1] -
    this.prefixSum[row1][col2 + 1] -
    this.prefixSum[row2 + 1][col1] +
    this.prefixSum[row1][col1]
  );
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
// @lc code=end
