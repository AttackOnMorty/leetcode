/*
 * @lc app=leetcode id=1109 lang=javascript
 *
 * [1109] Corporate Flight Bookings
 */

// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */

// O(n) / O(n)
function corpFlightBookings(bookings, n) {
  const diff = Array(n + 1).fill(0);

  for (const [first, last, seats] of bookings) {
    diff[first] += seats;

    if (last + 1 <= n) {
      diff[last + 1] -= seats;
    }
  }

  const prefixSum = [];

  for (let i = 1; i < diff.length; i++) {
    diff[i] += diff[i - 1];
    prefixSum.push(diff[i]);
  }

  return prefixSum;
}

// @lc code=end
