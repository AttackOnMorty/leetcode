/*
 * @lc app=leetcode id=1288 lang=javascript
 *
 * [1288] Remove Covered Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */

function removeCoveredIntervals(intervals) {
  intervals.sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))

  let count = 0
  const n = intervals.length
  let [left, right] = intervals[0]

  for (let i = 1; i < n; i++) {
    const curr = intervals[i]
    if (curr[0] >= left && curr[1] <= right) count++
    if (curr[0] <= right && curr[1] > right) right = curr[1]
    if (right < curr[0]) [left, right] = curr
  }

  return n - count
}

// @lc code=end
