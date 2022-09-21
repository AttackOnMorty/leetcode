/*
 * @lc app=leetcode id=889 lang=javascript
 *
 * [889] Construct Binary Tree from Preorder and Postorder Traversal
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
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// O(n) / O(logn -> n)
function constructFromPrePost(preorder, postorder) {
    if (preorder.length === 0 || postorder.length === 0) return null;

    const root = new TreeNode(preorder[0]);
    const index = postorder.indexOf(preorder[1]);

    const preorderLeft = preorder.slice(1, index + 2);
    const preorderRight = preorder.slice(index + 2);

    const postorderLeft = postorder.slice(0, index + 1);
    const postorderRight = postorder.slice(index + 1, postorder.length - 1);

    root.left = constructFromPrePost(preorderLeft, postorderLeft);
    root.right = constructFromPrePost(preorderRight, postorderRight);

    return root;
}

// @lc code=end
