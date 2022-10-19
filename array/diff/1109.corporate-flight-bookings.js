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
    const diff = new Array(n + 1).fill(0);
    for (const [first, last, seats] of bookings) {
        diff[first] += seats;
        if (last + 1 <= n) {
            diff[last + 1] -= seats;
        }
    }

    const prefixSum = [];
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += diff[i];
        prefixSum.push(sum);
    }

    return prefixSum;
}

// @lc code=end
