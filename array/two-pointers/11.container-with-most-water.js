/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// O(n) / O(1)
function maxArea(height) {
  let max = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);

    if (area > max) {
      max = area;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}

// @lc code=end
