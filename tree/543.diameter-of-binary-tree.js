/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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

// O(n) / O(logn -> n)
function diameterOfBinaryTree(root) {
  let res = 0;
  maxDepth(root);
  return res;

  function maxDepth(root) {
    if (root === null) {
      return 0;
    }

    const leftMax = maxDepth(root.left);
    const rightMax = maxDepth(root.right);

    res = Math.max(res, leftMax + rightMax);

    return 1 + Math.max(leftMax, rightMax);
  }
}

// @lc code=end
