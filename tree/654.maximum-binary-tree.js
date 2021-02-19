/*
 * @lc app=leetcode id=654 lang=javascript
 *
 * [654] Maximum Binary Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */

function constructMaximumBinaryTree(nums) {
    if (nums.length === 0) return null;

    let max = -Infinity;
    let index = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            index = i;
        }
    }

    const root = new TreeNode(max);
    root.left = constructMaximumBinaryTree(nums.slice(0, index));
    root.right = constructMaximumBinaryTree(nums.slice(index + 1));

    return root;
}

// @lc code=end
