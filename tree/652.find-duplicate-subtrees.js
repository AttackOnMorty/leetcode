/*
 * @lc app=leetcode id=652 lang=javascript
 *
 * [652] Find Duplicate Subtrees
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
 * @return {TreeNode[]}
 */

function findDuplicateSubtrees(root) {
    const res = [];
    const map = new Map();
    traverse(root);
    return res;

    function traverse(root) {
        if (root === null) return '#';
        const left = traverse(root.left);
        const right = traverse(root.right);
        const subTrees = `${left},${right},${root.val}`;

        if (map.get(subTrees) === undefined) {
            map.set(subTrees, 1);
        } else {
            map.set(subTrees, 1 + map.get(subTrees));
        }

        if (map.get(subTrees) === 2) {
            res.push(root);
        }

        return subTrees;
    }
}

// @lc code=end
