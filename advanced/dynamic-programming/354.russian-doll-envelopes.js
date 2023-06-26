/*
 * @lc app=leetcode id=354 lang=javascript
 *
 * [354] Russian Doll Envelopes
 */

// @lc code=start
/**
 * @param {number[][]} envelopes
 * @return {number}
 */

// O(nlogn) / O(n)
function maxEnvelopes(envelopes) {
  const heights = envelopes
    .sort((a, b) => (a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]))
    .map((envelope) => envelope[1]);

  return lengthOfLIS(heights);
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
