/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

function merge(intervals) {
  intervals.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))

  const res = []
  let [left, right] = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    const curr = intervals[i]
    if (curr[0] >= left && curr[1] <= right) continue
    if (curr[0] <= right && curr[1] > right) right = curr[1]
    if (curr[0] > right) {
      res.push([left, right])
      ;[left, right] = curr
    }
  }
  res.push([left, right])

  return res
}

// @lc code=end
