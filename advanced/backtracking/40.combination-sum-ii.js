/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// O(2^n) / O(target)
function combinationSum2(candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  backtrack(0, []);
  return result;

  function backtrack(start, path) {
    const sum = path.reduce((sum, curr) => (sum += curr), 0);
    if (sum > target) return;
    if (sum === target) return result.push([...path]);

    for (let i = start; i < candidates.length; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }
}

// @lc code=end
