/*
 * @lc app=leetcode id=698 lang=javascript
 *
 * [698] Partition to K Equal Sum Subsets
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// O(k^n) / O(n)
function canPartitionKSubsets(nums, k) {
    const sum = nums.reduce((prev, curr) => prev + curr, 0);
    const target = sum / k;

    if (target % 1 !== 0) return false;

    const buckets = new Array(k).fill(0);

    nums.sort((a, b) => b - a);

    return backtrack(0, 0);

    function backtrack(index, start) {
        if (index === nums.length) {
            return buckets.every((sum) => sum === target);
        }

        for (let i = start; i < k; i++) {
            const num = nums[index];
            if (buckets[i] + num > target) continue;

            buckets[i] += num;
            if (backtrack(index + 1, start)) return true;
            buckets[i] -= num;
        }

        return false;
    }
}

// O(k * 2^n) / O(n)
function canPartitionKSubsets(nums, k) {
    const sum = nums.reduce((prev, curr) => prev + curr, 0);
    const target = sum / k;

    if (target % 1 !== 0) return false;

    const used = new Array(nums.length);

    nums.sort((a, b) => b - a);

    return backtrack(0, 0, 0);

    function backtrack(sum, index, start) {
        if (index === k) {
            return true;
        }

        if (sum === target) {
            return backtrack(0, index + 1, 0);
        }

        for (let i = start; i < nums.length; i++) {
            if (used[i]) continue;
            if (sum + nums[i] > target) continue;

            sum += nums[i];
            used[i] = true;

            if (backtrack(sum, index, i + 1)) return true;

            sum -= nums[i];
            used[i] = false;
        }

        return false;
    }
}

// @lc code=end
