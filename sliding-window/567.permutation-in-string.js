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
  const window = new Map()
  const need = new Map()
  for (const c of s1) plusOne(need, c)
  let left = 0
  let right = 0
  let valid = 0
  while (right < s2.length) {
    const c = s2[right++]
    if (need.has(c)) {
      plusOne(window, c)
      if (window.get(c) === need.get(c)) valid++
    }
    while (right - left >= s1.length) {
      if (valid === need.size) return true
      const c = s2[left++]
      if (need.has(c)) {
        if (window.get(c) === need.get(c)) valid--
        minusOne(window, c)
      }
    }
  }
  return false

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
