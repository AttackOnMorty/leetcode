/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} str
 * @return {boolean}
 */

// O(n) / O(1)
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (!isAlphaNumeric(s[left]) && left < right) {
      left++;
    }

    while (!isAlphaNumeric(s[right]) && left < right) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

function isAlphaNumeric(char) {
  return (
    (char >= '0' && char <= '9') ||
    (char >= 'a' && char <= 'z') ||
    (char >= 'A' && char <= 'Z')
  );
}

// @lc code=end
