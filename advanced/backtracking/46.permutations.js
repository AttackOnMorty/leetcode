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

// O(n!) / O(n)
function permute(nums) {
  const result = [];
  backtrack([]);
  return result;

  function backtrack(path) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (const num of nums) {
      if (path.includes(num)) continue;
      path.push(num);
      backtrack(path);
      path.pop();
    }
  }
}

// @lc code=end
