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

// O(n) / O(logn -> n)
function invertTree(root) {
  preorder(root);
  return root;
}

function preorder(root) {
  if (root === null) {
    return;
  }

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  preorder(root.left);
  preorder(root.right);
}

// O(n) / O(logn -> n)
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

// @lc code=end
