/*
 * @lc app=leetcode id=543 lang=javascript
 *
 * [543] Diameter of Binary Tree
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

// O(n) / O(logn -> n)
function diameterOfBinaryTree(root) {
    let res = 0;
    postOrder(root);
    return res;

    function postOrder(root) {
        if (root === null) return 0;
        const left = postOrder(root.left);
        const right = postOrder(root.right);
        res = Math.max(res, left + right);
        return 1 + Math.max(left, right);
    }
}

// @lc code=end
