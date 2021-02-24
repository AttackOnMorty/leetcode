/*
 * @lc app=leetcode id=450 lang=javascript
 *
 * [450] Delete Node in a BST
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
 * @param {number} key
 * @return {TreeNode}
 */

function deleteNode(root, key) {
    if (root === null) return root;
    if (key === root.val) {
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;
        const minVal = findMin(root.right);
        root.val = minVal;
        root.right = deleteNode(root.right, minVal);
    } else if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    return root;
}

function findMin(root) {
    while (root.left !== null) root = root.left;
    return root.val;
}

// @lc code=end
