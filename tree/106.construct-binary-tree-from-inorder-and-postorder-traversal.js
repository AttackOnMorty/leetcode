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

function buildTree(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) return null;

    const value = postorder[postorder.length - 1];
    let index = -1;
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === value) {
            index = i;
            break;
        }
    }
    const leftCount = index;

    const root = new TreeNode(value);
    root.left = buildTree(
        inorder.slice(0, leftCount),
        postorder.slice(0, leftCount)
    );
    root.right = buildTree(
        inorder.slice(leftCount + 1),
        postorder.slice(leftCount, postorder.length - 1)
    );

    return root;
}

// @lc code=end
