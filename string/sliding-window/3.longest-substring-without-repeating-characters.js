/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// O(n) / O(n)
function lengthOfLongestSubstring(s) {
    const window = new Map();
    let left = 0;
    let right = 0;
    let res = 0;

    while (right < s.length) {
        const char = s[right];
        window.set(char, window.has(char) ? 1 + window.get(char) : 1);
        right++;

        while (window.get(char) !== 1) {
            const char = s[left];
            window.set(char, window.get(char) - 1);
            left++;
        }

        res = Math.max(res, right - left);
    }

    return res;
}

// @lc code=end
