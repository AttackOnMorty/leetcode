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

// DP: O(n) / O(n)
function maxSubArray(nums) {
    //  0 1  2 3  4 5 6  7 8
    // -2 1 -3 4 -1 2 1 -5 4
    //    1 -2 4  3 5 6  1 5
    const dp = [...nums];

    for (let i = 1; i < dp.length; i++) {
        dp[i] = Math.max(dp[i], dp[i - 1] + dp[i]);
    }

    return Math.max(...dp);
}

// DP: O(n) / O(1)
function maxSubArray(nums) {
    //  0 1  2 3  4 5 6  7 8
    // -2 1 -3 4 -1 2 1 -5 4
    //    1 -2 4  3 5 6  1 5
    let dp_0 = nums[0];
    let dp_1;
    let res = dp_0;

    for (let i = 1; i < nums.length; i++) {
        dp_1 = Math.max(nums[i], dp_0 + nums[i]);
        dp_0 = dp_1;
        res = Math.max(res, dp_1);
    }

    return res;
}

// Prefix Sum: O(n) / O(1)
function maxSubArray(nums) {
    //  0  1  2 3  4 5 6  7 8
    // -2  1 -3 4 -1 2 1 -5 4
    // -2 -1 -4 0 -1 1 2 -3 1
    const prefixSum = [];
    prefixSum.push(0);

    let sum = 0;
    for (const num of nums) {
        sum += num;
        prefixSum.push(sum);
    }

    let res = -Infinity;
    let minSum = Infinity;
    for (let i = 0; i < nums.length; i++) {
        minSum = Math.min(minSum, prefixSum[i]);
        res = Math.max(res, prefixSum[i + 1] - minSum);
    }

    return res;
}

// @lc code=end
