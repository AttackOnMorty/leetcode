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
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
  }
  for (let i = 0; i < nums.length; i++) {
    const other = target - nums[i]
    if (map.has(other) && map.get(other) !== i) return [i, map.get(other)]
  }
  return [-1, -1]
}

// @lc code=end
