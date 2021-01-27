/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

function connect(root) {
  if (root === null) return null
  connectTwoNodes(root.left, root.right)
  return root
}

function connectTwoNodes(node1, node2) {
  if (node1 === null && node2 === null) return
  node1.next = node2
  connectTwoNodes(node1.left, node1.right)
  connectTwoNodes(node2.left, node2.right)
  connectTwoNodes(node1.right, node2.left)
}

// @lc code=end
