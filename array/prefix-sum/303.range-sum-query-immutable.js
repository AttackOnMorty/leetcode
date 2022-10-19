/*
 * @lc app=leetcode id=303 lang=javascript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
/**
 * @param {number[]} nums
 */

// O(n) / O(n)
function NumArray(nums) {
    //     0  1  2  3  4  5
    //  0  1  2  3  4  5  6
    //  0 -2  0  3 -5  2 -1
    //  0 -2 -2  1 -4 -2 -3
    const n = nums.length;
    this.prefixSum = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        this.prefixSum[i] = this.prefixSum[i - 1] + nums[i - 1];
    }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */

// O(1) / O(1)
NumArray.prototype.sumRange = function (left, right) {
    return this.prefixSum[right + 1] - this.prefixSum[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end
