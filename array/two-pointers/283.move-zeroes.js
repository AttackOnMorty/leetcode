/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// O(n) / O(1)
function moveZeroes(nums) {
  let k = 0;

  for (const num of nums) {
    if (num !== 0) {
      nums[k++] = num;
    }
  }

  for (let i = k; i < nums.length; i++) {
    nums[k++] = 0;
  }
}

// @lc code=end
