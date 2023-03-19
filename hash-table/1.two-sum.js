/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n) / O(n)
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map.has(target - num)) {
            return [map.get(target - num), i];
        } else {
            map.set(num, i);
        }
    }

    return [-1, -1];
}

// @lc code=end
