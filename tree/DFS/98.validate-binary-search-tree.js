/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */

// O(n) / O(logn -> n)
function isValidBST(root) {
    return helper(root, null, null);

    function helper(root, min, max) {
        if (root === null) return true;
        if (min !== null && root.val <= min.val) return false;
        if (max !== null && root.val >= max.val) return false;
        return helper(root.left, min, root) && helper(root.right, root, max);
    }
}

// @lc code=end
