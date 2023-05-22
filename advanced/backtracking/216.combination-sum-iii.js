/*
 * @lc app=leetcode id=216 lang=javascript
 *
 * [216] Combination Sum III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

// O(2^m) / O(m)
function combinationSum3(k, n) {
  const nums = Array.from({ length: 9 }, (_, i) => i + 1);
  const result = [];
  backtrack(0, []);
  return result;

  function backtrack(start, path) {
    const sum = path.reduce((sum, curr) => (sum += curr), 0);
    if (path.length > k || sum > n) return;
    if (path.length === k && sum === n) return result.push([...path]);

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);
      backtrack(i + 1, path);
      path.pop();
    }
  }
}

// @lc code=end
