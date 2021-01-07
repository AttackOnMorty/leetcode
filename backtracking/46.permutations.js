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

function permute(nums) {
  const res = []
  const track = []
  backtrack(nums)
  return res

  function backtrack(nums) {
    if (track.length === nums.length) {
      res.push([...track])
      return
    }

    for (const num of nums) {
      if (track.includes(num)) continue
      track.push(num)
      backtrack(nums)
      track.pop()
    }
  }
}

// @lc code=end
