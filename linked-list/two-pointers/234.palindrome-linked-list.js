/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// O(n) / O(1)
function isPalindrome(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast !== null) {
    slow = slow.next;
  }

  let left = head;
  let right = reverse(slow);

  while (left && right) {
    if (left.val !== right.val) {
      return false;
    }

    left = left.next;
    right = right.next;
  }

  return true;
}

// O(n) / O(1)
function reverse(head) {
  let pre = null;
  let curr = head;

  while (curr) {
    const temp = curr.next;
    curr.next = pre;
    pre = curr;
    curr = temp;
  }

  return pre;
}

// @lc code=end
