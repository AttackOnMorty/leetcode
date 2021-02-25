/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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

// BFS
function minDepth(root) {
    if (root === null) return 0;
    let depth = 1;
    const queue = [root];
    while (queue.length !== 0) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            if (node.left === null && node.right === null) return depth;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        depth++;
    }
    return -1;
}

// @lc code=end
