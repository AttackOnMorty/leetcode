/*
 * @lc app=leetcode id=724 lang=javascript
 *
 * [724] Find Pivot Index
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// O(n) / O(1)
function pivotIndex(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);

    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === sum - leftSum - nums[i]) {
            return i;
        } else {
            leftSum += nums[i];
        }
    }

    return -1;
}

// @lc code=end
