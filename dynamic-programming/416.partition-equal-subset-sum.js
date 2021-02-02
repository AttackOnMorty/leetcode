/*
 * @lc app=leetcode id=416 lang=javascript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */

/*
dp[i][0] = true  // i: 1 -> n
dp[0][j] = false  // j: 1 -> sum
dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
*/

function canPartition(nums) {
  const sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 2 === 1) return false

  const dp = []
  const n = nums.length
  const half = sum / 2

  for (let i = 1; i <= n; i++) {
    addToDP(i, 0, true)
  }

  for (let j = 1; j <= sum; j++) {
    addToDP(0, j, false)
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= half; j++) {
      if (j - nums[i - 1] < 0) {
        addToDP(i, j, dp[i - 1][j])
      } else {
        addToDP(i, j, dp[i - 1][j] || dp[i - 1][j - nums[i - 1]])
      }
    }
  }

  return dp[n][half]

  function addToDP(i, j, item) {
    if (dp[i] === undefined) dp[i] = []
    dp[i][j] = item
  }
}

// compressed
function canPartition(nums) {
  const sum = nums.reduce((a, b) => a + b, 0)
  if (sum % 2 === 1) return false

  const half = sum / 2
  const dp = new Array(sum + 1).fill(false)
  dp[0] = true

  for (const num of nums) {
    for (let j = half; j >= 0; j--) {
      if (j - num >= 0) {
        dp[j] = dp[j] || dp[j - num]
      }
    }
  }

  return dp[half]
}

// @lc code=end
