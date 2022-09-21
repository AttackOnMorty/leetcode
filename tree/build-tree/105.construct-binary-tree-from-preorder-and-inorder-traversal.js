/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// O(n) / O(logn -> n)
function buildTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;

    const value = preorder[0];
    const index = inorder.indexOf(value);
    const root = new TreeNode(value);

    const preOrderLeft = preorder.slice(1, index + 1);
    const preOrderRight = preorder.slice(index + 1);

    const inorderLeft = inorder.slice(0, index);
    const inorderRight = inorder.slice(index + 1);

    root.left = buildTree(preOrderLeft, inorderLeft);
    root.right = buildTree(preOrderRight, inorderRight);

    return root;
}

// @lc code=end
