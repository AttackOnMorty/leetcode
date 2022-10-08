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

// O(n * n!) / O(n)
function solveNQueens(n) {
    const board = [...Array(n)].map((_) => Array(n).fill('.'));
    const res = [];
    backtrack(0);
    return res;

    function backtrack(row) {
        if (row === n) {
            res.push(board.map((item) => item.join('')));
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
