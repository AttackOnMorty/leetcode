/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) / O(n)
function maxSubArray(nums) {
  const dp = [...nums];

  for (let i = 1; i < dp.length; i++) {
    dp[i] = Math.max(dp[i], dp[i - 1] + dp[i]);
  }

  return Math.max(...dp);
}

// O(n) / O(1)
function maxSubArray(nums) {
  let dp_n_1 = nums[0];
  let dp_n;
  let res = dp_n_1;

  for (let i = 1; i < nums.length; i++) {
    dp_n = Math.max(nums[i], dp_n_1 + nums[i]);
    dp_n_1 = dp_n;
    res = Math.max(res, dp_n);
  }

  return res;
}

// @lc code=end
