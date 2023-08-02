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

// O(n^2) / O(1)
function threeSum(nums) {
  const result = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    const target = -nums[i];

    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[i], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
}

// @lc code=end
