/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

function flatten(root) {
  if (root === null) return

  flatten(root.left)
  flatten(root.right)

  let node1 = root.left
  let node2 = root.right

  root.left = null
  root.right = node1

  let p = root
  while (p.right !== null) p = p.right
  p.right = node2
}

// @lc code=end
