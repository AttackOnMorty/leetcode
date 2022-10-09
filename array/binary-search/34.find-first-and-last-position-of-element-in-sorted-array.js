/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(logn) / O(1)
function searchRange(nums, target) {
    return [searchLeft(nums, target), searchRight(nums, target)];
}

// O(logn) / O(1)
function searchLeft(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = left + ((right - left) >> 1);
        if (nums[mid] === target) {
            right = mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return nums[left] === target ? left : -1;
}

// O(logn) / O(1)
function searchRight(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);
        if (nums[mid] === target) {
            left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    const index = left === 0 ? left : left - 1;
    return nums[index] === target ? index : -1;
}

// @lc code=end
