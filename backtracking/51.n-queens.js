/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */

function solveNQueens(n) {
  const res = []
  const board = []
  for (let i = 0; i < n; i++) {
    board.push(new Array(n).fill('.'))
  }
  backtrack(0)
  return res

  function backtrack(row) {
    if (row === board.length) {
      const stringify = (array) => array.join('')
      const cloneDeep = (array) => JSON.parse(JSON.stringify(array))
      res.push(cloneDeep(board.map(stringify)))
      return
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(row, col)) continue
      board[row][col] = 'Q'
      backtrack(1 + row)
      board[row][col] = '.'
    }
  }

  function isValid(row, col) {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') return false
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') return false
    }
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (board[i][j] === 'Q') return false
    }
    return true
  }
}

// @lc code=end
