/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// O(n) / O(1)
function removeElement(nums, val) {
  let k = 0;

  for (const num of nums) {
    if (num !== val) {
      nums[k++] = num;
    }
  }

  return k;
}

// @lc code=end
