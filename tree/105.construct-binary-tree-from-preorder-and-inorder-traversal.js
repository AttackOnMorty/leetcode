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

function buildTree(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;

    const value = preorder[0];
    let index = -1;
    for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] === value) {
            index = i;
            break;
        }
    }
    const leftCount = index;
    const rightCount = inorder.length - leftCount - 1;

    const root = new TreeNode(value);
    root.left = buildTree(
        preorder.slice(1, leftCount + 1),
        inorder.slice(0, leftCount)
    );
    root.right = buildTree(
        preorder.slice(preorder.length - rightCount),
        inorder.slice(leftCount + 1)
    );

    return root;
}

// @lc code=end
