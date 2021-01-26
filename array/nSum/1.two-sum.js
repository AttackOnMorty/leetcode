/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  const map = new Map()
  const n = nums.length
  for (let i = 0; i < n; i++) {
    map.set(nums[i], i)
  }
  for (let i = 0; i < n; i++) {
    const other = target - nums[i]
    if (map.has(other) && map.get(other) !== i) return [i, map.get(other)]
  }
  return [-1, -1]
}

// @lc code=end
