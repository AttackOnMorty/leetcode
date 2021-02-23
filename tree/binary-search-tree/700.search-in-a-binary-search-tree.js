/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */

function searchBST(root, val) {
    if (root === null) return root;
    if (val === root.val) {
        return root;
    } else if (val < root.val) {
        return searchBST(root.left, val);
    } else if (val > root.val) {
        return searchBST(root.right, val);
    }
}

// @lc code=end
