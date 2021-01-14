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

function findAnagrams(s, p) {
  const window = new Map()
  const need = new Map()
  for (const c of p) plusOne(need, c)
  let left = 0
  let right = 0
  let valid = 0
  let result = []
  while (right < s.length) {
    const c = s[right++]
    if (need.has(c)) {
      plusOne(window, c)
      if (window.get(c) === need.get(c)) valid++
    }
    while (right - left >= p.length) {
      if (valid === need.size) result.push(left)
      const c = s[left++]
      if (need.has(c)) {
        if (window.get(c) === need.get(c)) valid--
        minusOne(window, c)
      }
    }
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
