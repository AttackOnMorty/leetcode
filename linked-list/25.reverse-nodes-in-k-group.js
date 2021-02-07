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

function reverseKGroup(head, k) {
    if (head === null) return head;
    let start1 = head;
    let end1 = head;
    for (let i = 1; i < k; i++) {
        if (end1.next === null) return head;
        end1 = end1.next;
    }
    const start2 = reverseKGroup(end1.next, k);
    end1.next = null;
    const newHead = reverse(start1);
    start1.next = start2;
    return newHead;

    function reverse(head) {
        if (head === null || head.next === null) return head;
        const start = reverse(head.next);
        head.next.next = head;
        head.next = null;
        return start;
    }
}

// @lc code=end
