/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// O(n) / O(logn -> n)
function buildTree(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) return null;

    const value = postorder.slice(-1)[0];
    const index = inorder.indexOf(value);
    const root = new TreeNode(value);

    const inorderLeft = inorder.slice(0, index);
    const inorderRight = inorder.slice(index + 1);

    const postorderLeft = postorder.slice(0, index);
    const postorderRight = postorder.slice(index, postorder.length - 1);

    root.left = buildTree(inorderLeft, postorderLeft);
    root.right = buildTree(inorderRight, postorderRight);

    return root;
}

// @lc code=end
