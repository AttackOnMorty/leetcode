/*
 * @lc app=leetcode id=47 lang=javascript
 *
 * [47] Permutations II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// O(n!) / O(n)
function permuteUnique(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  backtrack([], []);
  return result;

  function backtrack(path, used) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    let prevNum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (nums[i] === prevNum) continue;
      path.push(nums[i]);
      used[i] = true;
      prevNum = nums[i];
      backtrack(path, used);
      path.pop();
      used[i] = false;
    }
  }
}

// O(n!) / O(n)
function permuteUnique(nums) {
  const result = [];
  nums.sort((a, b) => a - b);
  backtrack([], []);
  return result;

  function backtrack(path, used) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      path.push(nums[i]);
      used[i] = true;
      backtrack(path, used);
      path.pop();
      used[i] = false;
    }
  }
}

// @lc code=end
