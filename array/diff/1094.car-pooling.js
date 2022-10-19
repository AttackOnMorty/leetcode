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

// O(n) / O(n) : n = max(to)
function carPooling(trips, capacity) {
    const n = Math.max(...trips.map(([_num, _from, to]) => to));
    const diff = new Array(n + 1).fill(0);

    for (const [num, from, to] of trips) {
        diff[from + 1] += num;
        diff[to + 1] -= num;
    }

    const prefixSum = diff;
    for (let i = 1; i <= n; i++) {
        prefixSum[i] += prefixSum[i - 1];
        if (prefixSum[i] > capacity) {
            return false;
        }
    }

    return true;
}

// @lc code=end
