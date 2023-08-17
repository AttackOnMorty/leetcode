/*
 * @lc app=leetcode id=1094 lang=javascript
 *
 * [1094] Car Pooling
 */

// @lc code=start
/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */

// O(n) / O(n)
function carPooling(trips, capacity) {
  const n = Math.max(...trips.map(([_num, _from, to]) => to));
  const diff = Array(n + 1).fill(0);

  for (const [num, from, to] of trips) {
    diff[from] += num;
    diff[to] -= num;
  }

  let sum = 0;

  for (const num of diff) {
    sum += num;

    if (sum > capacity) {
      return false;
    }
  }

  return true;
}

// @lc code=end
