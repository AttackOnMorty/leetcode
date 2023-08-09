/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
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
 * @param {number} x
 * @return {ListNode}
 */

// O(n) / O(1)
function partition(head, x) {
  const dummy1 = new ListNode();
  const dummy2 = new ListNode();
  let p1 = dummy1;
  let p2 = dummy2;
  let p = head;

  while (p) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }

    p = p.next;
  }

  p1.next = dummy2.next;
  p2.next = null;

  return dummy1.next;
}

// @lc code=end
