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

function lengthOfLongestSubstring(s) {
  const window = new Map()
  let left = 0
  let right = 0
  let result = 0
  while (right < s.length) {
    const c = s[right++]
    plusOne(window, c)
    while (window.get(c) > 1) {
      const c = s[left++]
      minusOne(window, c)
    }
    result = Math.max(result, right - left)
  }
  return result

  function plusOne(map, key) {
    if (!map.has(key)) map.set(key, 0)
    map.set(key, map.get(key) + 1)
  }

  function minusOne(map, key) {
    if (!map.has(key)) map.set(key, 0)
    map.set(key, map.get(key) - 1)
  }
}

// @lc code=end
