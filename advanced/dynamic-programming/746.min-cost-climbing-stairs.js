/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */

// Recursion: O(n) / O(n)
function minCostClimbingStairs(cost) {
    const n = cost.length;
    return Math.min(minCost(n - 1), minCost(n - 2));

    function minCost(n) {
        if (n === 0 || n === 1) return cost[n];
        return cost[n] + Math.min(minCost(n - 1), minCost(n - 2));
    }
}

// Recursion: O(n) / O(n)
function minCostClimbingStairs(cost) {
    const cache = new Map();
    const n = cost.length;
    return Math.min(minCost(n - 1), minCost(n - 2));

    function minCost(n) {
        if (n === 0 || n === 1) return cost[n];

        if (cache.has(n)) {
            return cache.get(n);
        }

        const res = cost[n] + Math.min(minCost(n - 1), minCost(n - 2));
        cache.set(n, res);

        return res;
    }
}

// DP: O(n) / O(n)
function minCostClimbingStairs(cost) {
    const n = cost.length;
    const dp = [];

    dp[0] = cost[0];
    dp[1] = cost[1];

    for (let i = 2; i < n; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
    }

    return Math.min(dp[n - 1], dp[n - 2]);
}

// DP: O(n) / O(1)
function minCostClimbingStairs(cost) {
    const n = cost.length;
    let dp_n_1 = cost[1];
    let dp_n_2 = cost[0];
    let dp_n;

    for (let i = 2; i < n; i++) {
        dp_n = cost[i] + Math.min(dp_n_1, dp_n_2);
        dp_n_2 = dp_n_1;
        dp_n_1 = dp_n;
    }

    return Math.min(dp_n_1, dp_n_2);
}

// @lc code=end
