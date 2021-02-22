/*
 * @lc app=leetcode id=230 lang=javascript
 *
 * [230] Kth Smallest Element in a BST
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
 * @param {number} k
 * @return {number}
 */

function kthSmallest(root, k) {
    let res = 0;
    let rank = 0;
    traverse(root);
    return res;

    function traverse(root) {
        if (root === null) return;
        traverse(root.left);
        if (++rank === k) res = root.val;
        traverse(root.right);
    }
}

// @lc code=end
