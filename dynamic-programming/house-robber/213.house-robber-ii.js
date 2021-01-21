/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/*
dp[-1] = 0
dp[-2] = 0
dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
*/

function rob(nums) {
  const n = nums.length
  if (nums.length === 1) return nums[0]
  return Math.max(robRange(1, n), robRange(0, n - 1))

  function robRange(start, end) {
    let dp_i_1 = 0
    let dp_i_2 = 0
    let dp_i = 0
    for (let i = start; i < end; i++) {
      dp_i = Math.max(dp_i_1, dp_i_2 + nums[i])
      dp_i_2 = dp_i_1
      dp_i_1 = dp_i
    }
    return dp_i
  }
}

// @lc code=end
