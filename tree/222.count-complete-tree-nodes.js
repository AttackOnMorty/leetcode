/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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

// O(logN * logN)
function countNodes(root) {
    if (root === null) return 0;
    let curr;

    let leftHeight = 0;
    curr = root;
    while (curr.left) {
        leftHeight++;
        curr = curr.left;
    }

    let rightHeight = 0;
    curr = root;
    while (curr.right) {
        rightHeight++;
        curr = curr.right;
    }

    if (leftHeight === rightHeight) {
        return 2 * Math.pow(2, leftHeight) - 1;
    }

    return 1 + countNodes(root.left) + countNodes(root.right);
}

// @lc code=end
