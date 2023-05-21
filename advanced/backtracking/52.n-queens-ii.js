/*
 * @lc app=leetcode id=52 lang=javascript
 *
 * [52] N-Queens II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// O(n!) / O(n)
function totalNQueens(n) {
  const board = Array(n)
    .fill()
    .map(() => Array(n).fill('.'));
  let result = 0;
  backtrack(0);
  return result;

  function backtrack(row) {
    if (row === n) {
      result++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(row, col)) continue;
      board[row][col] = 'Q';
      backtrack(row + 1);
      board[row][col] = '.';
    }
  }

  function isValid(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false;
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false;
    }

    return true;
  }
}
// @lc code=end
