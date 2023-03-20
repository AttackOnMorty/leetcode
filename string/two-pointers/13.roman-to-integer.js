/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// O(n) / (1)
function romanToInt(s) {
    const map = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]);

    const n = s.length;
    let sum = 0;

    for (let i = 0; i < n - 1; i++) {
        const curr = map.get(s[i]);
        const next = map.get(s[i + 1]);
        if (curr >= next) {
            sum += curr;
        } else {
            sum -= curr;
        }
    }

    return sum + map.get(s[n - 1]);
}

// @lc code=end
