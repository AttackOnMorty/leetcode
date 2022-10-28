/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

// O(m * n) / O(m + n)
function floodFill(image, sr, sc, color) {
    const m = image.length;
    const n = image[0].length;
    const originColor = image[sr][sc];

    fill(sr, sc);

    return image;

    function fill(sr, sc) {
        if (!inArea(sr, sc)) return;
        if (image[sr][sc] !== originColor) return;
        if (image[sr][sc] === color) return;

        image[sr][sc] = color;

        fill(sr - 1, sc);
        fill(sr + 1, sc);
        fill(sr, sc - 1);
        fill(sr, sc + 1);
    }

    function inArea(sr, sc) {
        return sr >= 0 && sr < m && sc >= 0 && sc < n;
    }
}

// @lc code=end
