/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// O(n) / O(1)
function addTwoNumbers(l1, l2) {
    const dummy = new ListNode();
    let current = dummy;
    let sum = 0;

    while (l1 || l2) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }

        current.next = new ListNode(sum % 10);
        current = current.next;
        sum = Math.floor(sum / 10);
    }

    if (sum === 1) {
        current.next = new ListNode(1);
    }

    return dummy.next;
}

// @lc code=end
