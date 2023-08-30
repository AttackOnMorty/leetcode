/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */

// O(n) / O(logn -> n)
function preorderTraversal(root) {
  const result = [];
  preorder(root);
  return result;

  function preorder(root) {
    if (root === null) {
      return;
    }

    result.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }
}

// O(n) / O(logn -> n)
function preorderTraversal(root) {
  const result = [];

  if (root === null) {
    return result;
  }

  result.push(root.val);
  result.push(...preorderTraversal(root.left));
  result.push(...preorderTraversal(root.right));

  return result;
}

// @lc code=end
