/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// (n) / O(height)
function connect(root) {
    if (root === null) {
        return null;
    }

    connectCore(root.left, root.right);
    return root;

    function connectCore(node1, node2) {
        if (node1 === null || node2 === null) {
            return;
        }

        node1.next = node2;
        connectCore(node1.left, node1.right);
        connectCore(node1.right, node2.left);
        connectCore(node2.left, node2.right);
    }
}

// @lc code=end
