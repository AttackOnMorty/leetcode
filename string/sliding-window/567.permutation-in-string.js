/*
 * @lc app=leetcode id=567 lang=javascript
 *
 * [567] Permutation in String
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

function checkInclusion(s1, s2) {
    const window = new Map();
    const need = new Map();
    let left = 0;
    let right = 0;
    let valid = 0;

    for (const char of s1) {
        need.set(char, need.has(char) ? 1 + need.get(char) : 1);
    }

    while (right < s2.length) {
        const char = s2[right++];
        if (need.has(char)) {
            window.set(char, window.has(char) ? 1 + window.get(char) : 1);
            if (window.get(char) === need.get(char)) {
                valid++;
            }
        }

        while (valid === need.size) {
            if (right - left === s1.length) {
                return true;
            }
            const char = s2[left++];
            if (need.has(char)) {
                if (window.get(char) === need.get(char)) {
                    valid--;
                }
                window.set(char, window.get(char) - 1);
            }
        }
    }

    return false;
}

// @lc code=end
