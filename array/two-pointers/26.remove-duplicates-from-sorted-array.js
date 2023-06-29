/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) / O(1)
function removeDuplicates(nums) {
  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] !== nums[i]) {
      nums[k++] = nums[i];
    }
  }

  return k;
}

// @lc code=end
