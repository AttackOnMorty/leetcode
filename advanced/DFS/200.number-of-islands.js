/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */

// O(m * n) / O(m + n)
function numIslands(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let res = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                res++;
                floodFill(i, j);
            }
        }
    }

    return res;

    function floodFill(i, j) {
        if (!inArea(i, j)) return;
        if (grid[i][j] === '0') return;

        grid[i][j] = '0';

        floodFill(i - 1, j);
        floodFill(i + 1, j);
        floodFill(i, j - 1);
        floodFill(i, j + 1);

        function inArea(i, j) {
            return i >= 0 && i < m && j >= 0 && j < n;
        }
    }
}

// @lc code=end
