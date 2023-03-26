/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */

// O(n) / O(height)
function preorderTraversal(root) {
    if (root === null) {
        return [];
    }

    const res = [];
    res.push(root.val);
    res.push(...preorderTraversal(root.left));
    res.push(...preorderTraversal(root.right));

    return res;
}

// O(n) / O(height)
function preorderTraversal(root) {
    const res = [];
    preorder(root);
    return res;

    function preorder(root) {
        if (root === null) {
            return;
        }

        res.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
}

// @lc code=end
