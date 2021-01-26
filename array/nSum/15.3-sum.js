/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function twoSum(nums, start, target) {
  const res = []
  const numbers = nums.slice(start)
  let i = 0
  let j = numbers.length - 1
  while (i < j) {
    const left = numbers[i]
    const right = numbers[j]
    const sum = left + right
    if (sum === target) {
      res.push([left, right])
      while (i < j && numbers[i] === left) i++
      while (i < j && numbers[j] === right) j--
    } else if (sum > target) {
      while (i < j && numbers[j] === right) j--
    } else if (sum < target) {
      while (i < j && numbers[i] === left) i++
    }
  }
  return res
}

function threeSum(nums, target = 0) {
  const res = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]
    const twoSums = twoSum(nums, i + 1, target - curr)
    for (const twoSum of twoSums) {
      res.push([curr, ...twoSum])
    }
    while (i < nums.length - 1 && nums[i + 1] === curr) i++
  }
  return res
}

// @lc code=end
