/*
 * @lc app=leetcode id=76 lang=javascript
 *
 * [76] Minimum Window Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// O(n) / O(n)
function minWindow(s, t) {
    const window = new Map();
    const need = new Map();
    let left = 0;
    let right = 0;
    let valid = 0;
    let start = 0;
    let length = Infinity;

    for (const char of t) {
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
            if (right - left < length) {
                start = left;
                length = right - left;
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

    return length === Infinity ? '' : s.slice(start, start + length);
}

// @lc code=end
