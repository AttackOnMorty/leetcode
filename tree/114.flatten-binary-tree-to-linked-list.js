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

// O(n) / O(logn -> n)
function flatten(root) {
    if (root === null) return;

    flatten(root.left);
    flatten(root.right);

    const leftRoot = root.left;
    const rightRoot = root.right;

    root.left = null;
    root.right = leftRoot;

    if (rightRoot === null) {
        return;
    }

    let p = root;
    while (p.right !== null) {
        p = p.right;
    }

    p.right = rightRoot;
}

// @lc code=end
