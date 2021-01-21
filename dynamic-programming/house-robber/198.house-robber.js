/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/*
dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
dp[i][1] = dp[i - 1][0] + num

dp[i][0] = Math.max(dp[i - 1][0], dp[i - 2][0] + num)

dp[i] = Math.max(dp[i - 1], dp[i - 2] + num)
*/

function rob(nums) {
  let dp_i_1 = 0
  let dp_i_2 = 0
  let dp_i = 0
  for (const num of nums) {
    dp_i = Math.max(dp_i_1, dp_i_2 + num)
    dp_i_2 = dp_i_1
    dp_i_1 = dp_i
  }
  return dp_i
}

// @lc code=end
