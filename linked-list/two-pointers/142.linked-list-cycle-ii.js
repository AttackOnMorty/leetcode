/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// O(n) / O(1)
function detectCycle(head) {
	let slow = head;
	let fast = head;

	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;

		if (slow === fast) {
			break;
		}
	}

	if (fast === null || fast.next === null) {
		return null;
	}

	slow = head;

	while (slow !== fast) {
		slow = slow.next;
		fast = fast.next;
	}

	return slow;
}

// @lc code=end
