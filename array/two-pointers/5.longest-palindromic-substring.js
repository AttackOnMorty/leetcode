/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// O(n^2) / O(1)
function longestPalindrome(s) {
  let res = '';

  for (let i = 0; i < s.length; i++) {
    const res1 = palindrome(s, i, i);
    const res2 = palindrome(s, i, i + 1);

    if (res1.length > res.length) {
      res = res1;
    }

    if (res2.length > res.length) {
      res = res2;
    }
  }

  return res;
}

// O(n) / O(1)
function palindrome(s, left, right) {
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      break;
    }

    left--;
    right++;
  }

  return s.slice(left + 1, right);
}

// @lc code=end
