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

function minWindow(s, t) {
  const window = new Map()
  const need = new Map()
  for (const c of t) plusOne(need, c)
  let left = 0
  let right = 0
  let valid = 0
  let start = 0
  let len = Infinity
  while (right < s.length) {
    const c = s[right++]
    if (need.has(c)) {
      plusOne(window, c)
      if (window.get(c) === need.get(c)) valid++
    }
    while (valid === need.size) {
      if (right - left < len) {
        start = left
        len = right - left
      }
      const c = s[left++]
      if (need.has(c)) {
        if (window.get(c) === need.get(c)) valid--
        minusOne(window, c)
      }
    }
  }
  return len === Infinity ? '' : s.slice(start, start + len)

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
