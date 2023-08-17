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
  this.prefixSum = [];

  let sum = 0;
  this.prefixSum.push(sum);

  for (const num of nums) {
    sum += num;
    this.prefixSum.push(sum);
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
