/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Binary Search: Left and Right
function searchRange(nums, target) {
  return [findLeft(), findRight()]

  function findLeft() {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      const mid = left + ((right - left) >> 1)
      if (nums[mid] === target) {
        right = mid - 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      }
    }
    if (left >= nums.length || nums[left] !== target) return -1
    return left
  }

  function findRight() {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      const mid = left + ((right - left) >> 1)
      if (nums[mid] === target) {
        left = mid + 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      }
    }
    if (right < 0 || nums[right] !== target) return -1
    return right
  }
}

// @lc code=end
