/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// O(n) / O(n)
function findAnagrams(s, p) {
    const window = new Map();
    const need = new Map();
    let left = 0;
    let right = 0;
    let valid = 0;
    const res = [];

    for (const char of p) {
        need.set(char, need.has(char) ? 1 + need.get(char) : 1);
    }

    while (right < s.length) {
        const char = s[right++];
        if (need.has(char)) {
            window.set(char, window.has(char) ? 1 + window.get(char) : 1);
            if (window.get(char) === need.get(char)) {
                valid++;
            }
        }

        while (valid === need.size) {
            if (right - left === p.length) {
                res.push(left);
            }
            const char = s[left++];
            if (need.has(char)) {
                if (window.get(char) === need.get(char)) {
                    valid--;
                }
                window.set(char, window.get(char) - 1);
            }
        }
    }

    return res;
}

// @lc code=end
