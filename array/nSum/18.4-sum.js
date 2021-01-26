/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
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

function threeSum(nums, start, target) {
  const res = []
  const numbers = nums.slice(start)
  const n = numbers.length
  for (let i = 0; i < n; i++) {
    const curr = numbers[i]
    const twoSums = twoSum(numbers, i + 1, target - curr)
    for (const twoSum of twoSums) {
      res.push([curr, ...twoSum])
    }
    while (i < n - 1 && numbers[i + 1] === curr) i++
  }
  return res
}

function fourSum(nums, target) {
  nums.sort((a, b) => a - b)
  const res = []
  const n = nums.length
  for (let i = 0; i < n; i++) {
    const curr = nums[i]
    const threeSums = threeSum(nums, i + 1, target - curr)
    for (const threeSum of threeSums) {
      res.push([curr, ...threeSum])
    }
    while (i < n - 1 && nums[i + 1] === curr) i++
  }
  return res
}

// @lc code=end
