/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// O(n * n!) / O(n)
function permute(nums) {
    const res = [];
    backtrack([], 0);
    return res;

    function backtrack(path, index) {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }

        for (const num of nums) {
            if (path.includes(num)) continue;
            path.push(num);
            backtrack(path, index + 1);
            path.pop();
        }
    }
}

// @lc code=end
