/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// O(n) / O(logn -> n)
function lowestCommonAncestor(root, p, q) {
    if (root === null) {
        return null;
    }

    if (p.val > q.val) {
        return lowestCommonAncestor(root, q, p);
    }

    if (root.val >= p.val && root.val <= q.val) {
        return root;
    }

    if (root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

    if (root.val < p.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
}

// @lc code=end
