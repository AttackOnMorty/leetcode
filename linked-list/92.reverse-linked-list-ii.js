/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

// O(n) / O(n)
function reverseBetween(head, left, right) {
  if (left === 1) {
    return reverseN(head, right);
  }

  head.next = reverseBetween(head.next, left - 1, right - 1);

  return head;
}

// O(n) / O(n)
function reverseN(head, n) {
  let successor;
  return helper(head, n);

  function helper(head, n) {
    if (n === 1) {
      successor = head.next;
      return head;
    }

    const newHead = helper(head.next, n - 1);

    head.next.next = head;
    head.next = successor;

    return newHead;
  }
}

// @lc code=end
