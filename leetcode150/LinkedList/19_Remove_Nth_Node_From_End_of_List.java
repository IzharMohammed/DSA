/*
Problem: Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example 2:
Input: head = [1], n = 1
Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
*/

/* Method 1: Two Pass Approach */
// Approach:
// 1. Calculate the total size of the linked list.
// 2. If the node to remove is the head itself (totalSize == n), return head.next.
// 3. Traverse to the node just before the one to remove using (totalSize - n).
// 4. Update the next pointer to skip the nth node.
// Time Complexity: O(n) - Two passes through the list.
// Space Complexity: O(1) - No additional data structures used.

// class Solution {
//     public ListNode removeNthFromEnd(ListNode head, int n) {
//         int totalSize = 0;
//         ListNode curr = head;

//         // Calculate the total size of the linked list
//         while (curr != null) {
//             totalSize++;
//             curr = curr.next;
//         }

//         // Edge case: If the head node is to be removed
//         if (totalSize == n)
//             return head.next;

//         curr = head;

//         // Find the node just before the one to remove
//         int positionToChange = totalSize - n;

//         for (int i = 1; i < positionToChange; i++) {
//             curr = curr.next;
//         }

//         // Remove the nth node from the end
//         curr.next = curr.next.next;

//         return head;
//     }
// }

/* Method 2: One Pass Approach Using Two Pointers */
// Approach:
// 1. Use a dummy node to simplify edge cases like removing the head.
// 2. Initialize two pointers (fast and slow) at the dummy node.
// 3. Move the fast pointer n steps ahead.
// 4. Move both pointers until fast reaches the end. The slow pointer will then be at the node just before the one to remove.
// 5. Update the next pointer of the slow pointer to skip the nth node.
// Time Complexity: O(n) - Single pass through the list.
// Space Complexity: O(1) - No additional data structures used.

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode dummy = new ListNode(0); // Create a dummy node
        dummy.next = head;

        ListNode fast = dummy; // Fast pointer
        ListNode slow = dummy; // Slow pointer

        // Move the fast pointer n steps ahead
        for (int i = 0; i < n; i++) {
            fast = fast.next;
        }

        // Move both fast and slow pointers until fast reaches the end
        while (fast.next != null) {
            fast = fast.next;
            slow = slow.next;
        }

        // Remove the nth node from the end
        slow.next = slow.next.next;

        return dummy.next; // Return the modified list
    }
}

