/*
 * @lc app=leetcode id=297 lang=javascript
 *
 * [297] Serialize and Deserialize Binary Tree
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
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// 1. Preorder traversal
function serialize(root) {
    if (root === null) return [];
    let res = [];
    helper(root);
    return res;

    function helper(root) {
        if (root === null) {
            res.push(null);
            return;
        }
        res.push(root.val);
        helper(root.left);
        helper(root.right);
    }
}

// 2. Postorder traversal
function serialize(root) {
    if (root === null) return [];
    let res = [];
    helper(root);
    return res;

    function helper(root) {
        if (root === null) {
            res.push(null);
            return;
        }
        helper(root.left);
        helper(root.right);
        res.push(root.val);
    }
}

// 3. BFS
function serialize(root) {
    if (root === null) return [];
    const res = [];
    const queue = [root];
    while (queue.length !== 0) {
        const length = queue.length;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            if (node === null) {
                res.push(null);
                continue;
            }
            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    return res;
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

// 1. Preorder traversal
function deserialize(data) {
    if (Array.isArray(data) && data.length === 0) return null;
    const first = data.shift();
    if (first === null) return null;
    const root = new TreeNode(first);
    root.left = deserialize(data);
    root.right = deserialize(data);
    return root;
}

// 2. Postorder traversal
function deserialize(data) {
    if (Array.isArray(data) && data.length === 0) return null;
    const last = data.pop();
    if (last === null) return null;
    const root = new TreeNode(last);
    root.right = deserialize(data);
    root.left = deserialize(data);
    return root;
}

// 3. BFS
// [1,2,3,null,null,4,5,null,null,null,null]

function deserialize(data) {
    if (Array.isArray(data) && data.length === 0) return null;
    const root = new TreeNode(data[0]);
    const queue = [root];
    for (let i = 1; i < data.length; ) {
        const parent = queue.shift();

        const left = data[i++];
        if (left !== null) {
            parent.left = new TreeNode(left);
            queue.push(parent.left);
        } else {
            parent.left = null;
        }

        const right = data[i++];
        if (right !== null) {
            parent.right = new TreeNode(right);
            queue.push(parent.right);
        } else {
            parent.right = null;
        }
    }
    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
