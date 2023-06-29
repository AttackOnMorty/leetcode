/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// O(n) / O(1)
function rotate(nums, k) {
  k %= n;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(nums, left, right) {
  while (left < right) {
    [nums[left++], nums[right--]] = [nums[right], nums[left]];
  }
}

// @lc code=end
