/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// O(2^n) / O(target)
function combinationSum(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  backtrack(0, path);
  return result;

  function backtrack(start, path) {
    const sum = path.reduce((sum, curr) => (sum += curr), 0);
    if (sum > target) return;
    if (sum === target) return result.push([...path]);

    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i]);
      backtrack(i, path);
      path.pop();
    }
  }
}

// @lc code=end
