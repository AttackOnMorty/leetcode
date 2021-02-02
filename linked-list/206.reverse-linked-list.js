/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */

// recursive
function reverseList(head) {
  if (head === null || head.next === null) return head
  const last = reverseList(head.next)
  head.next.next = head
  head.next = null
  return last
}

// @lc code=end
