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

function isPalindrome(head) {
    if (head === null) return true;
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if (fast !== null) slow = slow.next;
    let left = head;
    let right = reverse(slow);
    while (right !== null) {
        if (left.val !== right.val) return false;
        left = left.next;
        right = right.next;
    }
    return true;

    function reverse(head) {
        if (head === null || head.next === null) return head;
        const start = reverse(head.next);
        head.next.next = head;
        head.next = null;
        return start;
    }
}

// @lc code=end
