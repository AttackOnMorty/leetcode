/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

function twoSum(numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1]
    } else if (numbers[left] + numbers[right] > target) {
      right--
    } else if (numbers[left] + numbers[right] < target) {
      left++
    }
  }
  return [-1, -1]
}

// @lc code=end
