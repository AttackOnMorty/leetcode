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
    if (root === null) return;

    flatten(root.left);
    flatten(root.right);

    const node1 = root.left;
    const node2 = root.right;

    root.right = node1;
    root.left = null;

    let curr = root;
    while (curr.right !== null) curr = curr.right;
    curr.right = node2;
}

// @lc code=end
