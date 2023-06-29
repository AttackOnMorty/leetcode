/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) / O(1)
function removeDuplicates(nums) {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1] || nums[i] !== nums[i + 1]) {
      nums[k++] = nums[i];
    }
  }

  return k;
}

// @lc code=end
