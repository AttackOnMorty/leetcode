/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
function deleteDuplicates(head) {
	const dummy = new ListNode(-Infinity);
	dummy.next = head;

	let p1 = dummy;
	let p2 = p1.next;

	while (p2 !== null) {
		if (p1.val === p2.val) {
			p1.next = p1.next.next;
			p2 = p1.next;
		} else {
			p1 = p1.next;
			p2 = p2.next;
		}
	}

	return dummy.next;
}

// @lc code=end
