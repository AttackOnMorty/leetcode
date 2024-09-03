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

// O(n) / O(1)
function isPalindrome(head) {
	let slow = head;
	let fast = head;

	while (fast !== null && fast.next !== null) {
		slow = slow.next;
		fast = fast.next.next;
	}

	if (fast !== null) {
		slow = slow.next;
	}

	let l1 = head;
	let l2 = reverse(slow);

	while (l1 !== null && l2 !== null) {
		if (l1.val !== l2.val) {
			return false;
		}

		l1 = l1.next;
		l2 = l2.next;
	}

	return true;
}

// O(n) / O(1)
function reverse(head) {
	let p = null;
	let current = head;

	while (current !== null) {
		const next = current.next;
		current.next = p;
		p = current;
		current = next;
	}

	return p;
}

// @lc code=end
