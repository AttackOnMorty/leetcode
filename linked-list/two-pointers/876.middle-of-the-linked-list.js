/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
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

// O(n) / O(1)
function middleNode(head) {
	let slow = head;
	let fast = head;

	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}

	return slow;
}

// @lc code=end
