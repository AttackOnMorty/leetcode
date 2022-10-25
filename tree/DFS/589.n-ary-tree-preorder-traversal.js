/*
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

// O(n) / O(logn -> n)
function preorder(root) {
    const res = [];
    helper(root);
    return res;

    function helper(root) {
        if (root === null) {
            return;
        }

        res.push(root.val);

        for (const child of root.children) {
            helper(child);
        }
    }
}

// @lc code=end
