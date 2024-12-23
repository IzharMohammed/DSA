// Link:- https://leetcode.com/problems/reverse-linked-list-ii/?envType=study-plan-v2&envId=top-interview-150

/**
 * Problem: Reverse a portion of a singly linked list between positions left and right.
 * Given the head of a singly linked list and two integers left and right where left <= right,
 * reverse the nodes of the list from position left to position right, and return the reversed list.
 *
 * Approach:
 * 1. **Edge Cases**:
 *    - If the list is empty or has only one node, return the head directly.
 *    - If `left == right`, no reversal is required.
 *
 * 2. **Using a Dummy Node**:
 *    - Create a dummy node pointing to the head of the list to handle edge cases where the reversal
 *      starts at the head. This simplifies managing pointers.
 *
 * 3. **Identify the Sublist to Reverse**:
 *    - Use a pointer `leftPre` to find the node just before the start of the reversal (node at position `left - 1`).
 *    - Use a pointer `currNode` to find the start of the reversal (node at position `left`).
 *
 * 4. **Reverse the Sublist**:
 *    - Reverse the nodes between positions `left` and `right` using a standard linked list reversal approach.
 *
 * 5. **Reconnect the List**:
 *    - Connect the reversed sublist back to the main list:
 *      - `leftPre.next` should point to the new head of the reversed sublist.
 *      - The tail of the reversed sublist should point to the next node after the reversal.
 *
 * 6. **Return the Result**:
 *    - Return the updated list starting from `dummy.next`.
 *
 * Time Complexity:
 * - O(n): We traverse the list once to locate the `left` position and once to reverse the sublist.
 *
 * Space Complexity:
 * - O(1): No additional space is used apart from pointers.
 */

class Solution {
    public ListNode reverseBetween(ListNode head, int left, int right) {

        // Edge case: if the list is empty or has only one node, return the head
        if (head == null || head.next == null)
            return head;

        // Dummy node to handle edge cases
        ListNode dummy = new ListNode(0);
        dummy.next = head;

        // Find the node before the reversal segment starts
        ListNode leftPre = dummy;
        ListNode currNode = head;

        // Move leftPre and currNode to their respective starting positions
        for (int i = 0; i < left - 1; i++) {
            leftPre = leftPre.next;
            currNode = currNode.next;
        }

        // Start reversing the segment
        ListNode end = currNode; // Mark the start of the segment to be reversed
        ListNode prevNode = null;

        // Reverse the nodes between left and right
        for (int i = 0; i < (right - left + 1); i++) {
            ListNode nextNode = currNode.next; // Store the next node
            currNode.next = prevNode;         // Reverse the current node's pointer
            prevNode = currNode;              // Move prevNode forward
            currNode = nextNode;              // Move currNode forward
        }

        // Reconnect the reversed segment to the main list
        leftPre.next = prevNode; // Connect leftPre to the new head of the reversed segment
        end.next = currNode;     // Connect the tail of the reversed segment to the remaining list

        // Return the updated list
        return dummy.next;
    }
}

