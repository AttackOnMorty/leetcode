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

// Recursion v1
function fib(n) {
  if (n === 0 || n === 1) return n
  return fib(n - 1) + fib(n - 2)
}

// Recursion v2: cache
function fib(n) {
  const cache = new Map()
  return helper(n, cache)
}

function helper(n, cache) {
  if (n === 0 || n === 1) return n
  if (cache.has(n)) return cache.get(n)
  cache.set(n, helper(n - 1, cache) + helper(n - 2, cache))
  return cache.get(n)
}

// DP v1
function fib(n) {
  if (n === 0 || n === 1) return n
  const dp = []
  dp[0] = 0
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

// DP v2: compressed
function fib(n) {
  if (n === 0 || n === 1) return n
  let prev = 0
  let curr = 1
  for (let i = 2; i <= n; i++) {
    const sum = prev + curr
    prev = curr
    curr = sum
  }
  return curr
}

// @lc code=end
