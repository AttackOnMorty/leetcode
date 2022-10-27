/*
 * @lc app=leetcode id=409 lang=javascript
 *
 * [409] Longest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// O(n) / O(n)
function longestPalindrome(s) {
    const set = new Set();

    for (const char of s) {
        if (set.has(char)) {
            set.delete(char);
        } else {
            set.add(char);
        }
    }

    if (set.size === 0) {
        return s.length;
    } else {
        return s.length - (set.size - 1);
    }
}

// @lc code=end
