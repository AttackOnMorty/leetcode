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

// Preorder
function serialize(root) {
    const res = [];
    helper(root);
    return res.join(',');

    function helper(root) {
        if (root === null) {
            res.push('null');
            return;
        }

        res.push(root.val);
        helper(root.left);
        helper(root.right);
    }
}

// Postorder
function serialize(root) {
    const res = [];
    helper(root);
    return res.join(',');

    function helper(root) {
        if (root === null) {
            res.push('null');
            return;
        }

        helper(root.left);
        helper(root.right);
        res.push(root.val);
    }
}

// BFS
function serialize(root) {
    const queue = [];
    const res = [];

    queue.push(root);

    while (queue.length !== 0) {
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();

            if (node === null) {
                res.push('null');
                continue;
            }

            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
    }

    return res.join(',');
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

// Preorder
function deserialize(data) {
    const nodes = data.split(',');
    return helper(nodes);

    function helper(nodes) {
        const value = nodes.shift();

        if (value === 'null') return null;

        const root = new TreeNode(value);
        root.left = helper(nodes);
        root.right = helper(nodes);

        return root;
    }
}

// Postorder
function deserialize(data) {
    const nodes = data.split(',');
    return helper(nodes);

    function helper(nodes) {
        const value = nodes.pop();

        if (value === 'null') return null;

        const root = new TreeNode(value);
        root.right = helper(nodes);
        root.left = helper(nodes);

        return root;
    }
}

// BFS
function deserialize(data) {
    const values = data.split(',');
    if (values[0] === 'null') return null;

    const queue = [];
    const root = new TreeNode(values.shift());

    queue.push(root);

    while (queue.length !== 0) {
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            if (node === null) continue;

            const leftValue = values.shift();
            const rightValue = values.shift();

            const left = leftValue === 'null' ? null : new TreeNode(leftValue);
            const right =
                rightValue === 'null' ? null : new TreeNode(rightValue);

            node.left = left;
            node.right = right;

            queue.push(node.left);
            queue.push(node.right);
        }
    }

    return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end
