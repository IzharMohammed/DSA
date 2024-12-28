/**
 * Approach:
 * 1. Handle Base Cases:
 *    - If either list1 or list2 is null, return the other list as the merged result.
 * 2. Create a Dummy Node:
 *    - A dummy node is initialized with a placeholder value (-1) to simplify the process of appending nodes to the merged list.
 *    - Use a pointer 'current' to traverse and build the merged list.
 * 3. Merge While Both Lists Are Non-Empty:
 *    - Compare the values of the current nodes in list1 and list2.
 *    - Append the smaller node to 'current.next' and move the corresponding pointer (list1 or list2) forward.
 *    - Move 'current' forward to the newly added node.
 * 4. Attach Remaining Nodes:
 *    - If one list is exhausted before the other, attach the remaining nodes of the non-empty list to the merged list.
 * 5. Return the Merged List:
 *    - Return 'dummy.next' as the head of the merged list, skipping the placeholder value in the dummy node.
 * 
 * Time Complexity: O(n + m), where n and m are the lengths of list1 and list2 respectively.
 * Space Complexity: O(1), as we are not using any extra space beyond the dummy node and pointers.
 */

class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {

        // Base case: if either list is null, return the other list
        if (list1 == null) return list2;
        if (list2 == null) return list1;

        // Initialize a dummy node to simplify merging
        ListNode dummy = new ListNode(-1);
        // Pointer to build the merged list
        ListNode current = dummy;

        // Merge the two lists while both are non-empty
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) {
                // Append the smaller node from list1
                current.next = list1;
                list1 = list1.next; // Move list1 forward
            } else {
                // Append the smaller node from list2
                current.next = list2;
                list2 = list2.next; // Move list2 forward
            }
            // Move current forward to the newly added node
            current = current.next;
        }

        // If one list is exhausted, attach the remaining nodes of the other list
        if (list1 == null) {
            current.next = list2;
        } else {
            current.next = list1;
        }

        // Return the merged list starting from dummy.next (skipping dummy's placeholder value)
        return dummy.next;
    }
}

