/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
 * @param {number} k
 * @return {ListNode}
 */

// O(n) / O(n)
function reverseKGroup(head, k) {
  let p = head;

  for (let i = 0; i < k; i++) {
    if (p === null) {
      return head;
    }

    p = p.next;
  }

  const newHead = reverseN(head, k);

  head.next = reverseKGroup(p, k);

  return newHead;
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
