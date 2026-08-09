/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        //reverse and merge
        //Find the middle using slow and fasr pointers
        let slow = head;
        let fast = head.next
        while( fast!= null && fast.next!=null){
            slow = slow.next;
            fast = fast.next.next;
        }
        //reverse se the second half
        let second = slow.next;
        let prev = (slow.next = null);
        while(second !==null){
            const temp = second.next;
            second.next = prev
            prev = second
            second = temp;
        }
        //Merge the two halves one-by-one
        let first = head;
        second = prev;
        while(second!=null){
            const t1 = first.next;
            const t2 = second.next;
            first.next = second;
            second.next = t1;
            first = t1;
            second = t2;
        }
    }
}
