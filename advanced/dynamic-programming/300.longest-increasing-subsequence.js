/*
 * @lc app=leetcode id=300 lang=javascript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// dp[i] = max(dp[i], dp[j] + 1)

// O(n^2) / O(n)
function lengthOfLIS(nums) {
  const n = nums.length;
  const dp = Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

// O(nlogn) / O(n)
function lengthOfLIS(nums) {
  const res = [];

  for (const num of nums) {
    if (res.length === 0 || num > res[res.length - 1]) {
      res.push(num);
    } else {
      const index = equalOrGreaterThan(num, res);
      res[index] = num;
    }
  }

  return res.length;
}

// O(nlogn) / O(1)
function equalOrGreaterThan(target, nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// @lc code=end
