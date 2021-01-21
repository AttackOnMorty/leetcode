/*
 * @lc app=leetcode id=337 lang=javascript
 *
 * [337] House Robber III
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
dp[node][0] =
  Math.max(dp[node.left][0], dp[node.left][1]) + Math.max(dp[node.left][0], dp[node.left][1])
dp[node][1] = dp[node.left][0] + dp[node.right][0] + node.val
*/

function rob(root) {
  const res = dp(root)
  return Math.max(res[0], res[1])

  function dp(node) {
    if (node === null) return [0, 0]
    const left = dp(node.left)
    const right = dp(node.right)
    const not_rob = Math.max(left[0], left[1]) + Math.max(right[0], right[1])
    const rob = left[0] + right[0] + node.val
    return [not_rob, rob]
  }
}

// @lc code=end
