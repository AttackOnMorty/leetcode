/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */

// O(n) / O(height)
function invertTree(root) {
    if (root === null) {
        return null;
    }

    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;

    return root;
}

// O(n) / O(height)
function invertTree(root) {
    traverse(root);
    return root;

    function traverse(root) {
        if (root === null) {
            return;
        }

        // Preorder
        const temp = root.left;
        root.left = root.right;
        root.right = temp;

        traverse(root.left);
        traverse(root.right);

        // Postorder
        // const temp = root.left;
        // root.left = root.right;
        // root.right = temp;
    }
}

// @lc code=end
