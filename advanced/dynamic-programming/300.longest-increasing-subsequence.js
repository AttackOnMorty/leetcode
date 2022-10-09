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

/**
 * dp[i] = max(dp[i], dp[j] + 1)
 */
function lengthOfLIS(nums) {
    const n = nums.length;
    const dp = new Array(n).fill(1);

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
    const top = [];
    let piles = 0;

    top[0] = nums[0];
    piles = 1;

    for (const num of nums) {
        let left = 0;
        let right = piles - 1;

        while (left <= right) {
            const mid = left + ((right - left) >> 1);
            if (top[mid] === num) {
                right = mid - 1;
            } else if (top[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        if (left === piles) piles++;
        top[left] = num;
    }

    return piles;
}

// @lc code=end
