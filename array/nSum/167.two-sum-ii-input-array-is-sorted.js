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

// Two Sum with Duplicate Sets
function twoSum(numbers, target) {
  numbers.sort((a, b) => a - b)
  const res = []
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

function twoSum(numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    const sum = numbers[left] + numbers[right]
    if (sum === target) return [left + 1, right + 1]
    else if (sum > target) right--
    else if (sum < target) left++
  }
  return [-1, -1]
}

// @lc code=end
