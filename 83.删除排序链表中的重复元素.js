/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
    let list = head
    if (list === null) {
        return null
    }
    while (list.next !== null) {
        if (list.val == list.next.val) {
            list.next = list.next.next
        } else {
            list = list.next
        }
    }
    return head
};
// @lc code=end

