/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// Recursion  O(2^n) / O(1)
function fib(n) {
    if (n === 0 || n === 1) return n;
    return fib(n - 1) + fib(n - 2);
}

// Recursion with cache  O(n) / O(n)
function fib(n) {
    const cache = new Map();
    return helper(n);

    function helper(n) {
        if (n === 0 || n === 1) return n;
        if (cache.has(n)) return cache.get(n);

        const res = fib(n - 1) + fib(n - 2);
        cache.set(n, res);

        return res;
    }
}

// DP  O(n) / O(1)
function fib(n) {
    if (n === 0 || n === 1) return n;
    let prev = 0;
    let curr = 1;
    for (let i = 2; i <= n; i++) {
        const temp = prev + curr;
        prev = curr;
        curr = temp;
    }
    return curr;
}

// @lc code=end
