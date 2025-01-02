/*
Problem Statement:
Given the head of a linked list, rotate the list to the right by k places.

Approach 1: Brute Force
1. Calculate the length of the linked list.
   - Traverse the list to find its length (len).
   - Time Complexity: O(N)
   - Space Complexity: O(1)
2. Adjust k to handle cases where k > len by taking k % len.
   - Time Complexity: O(1)
   - Space Complexity: O(1)
3. Traverse the list again to find the node before the breakpoint (len - k).
   - Time Complexity: O(N)
   - Space Complexity: O(1)
4. Break the list at the breakpoint, set the tail to point to the original head, and update the new head.
   - Time Complexity: O(N)
   - Space Complexity: O(1)

Approach 2: Efficient (Implemented Below)
1. Handle edge cases for null, single-node lists, or k = 0.
   - Time Complexity: O(1)
   - Space Complexity: O(1)
2. Calculate the length of the list and adjust k.
   - Time Complexity: O(N)
   - Space Complexity: O(1)
3. Find the breakpoint (len - k) by iterating the list.
   - Time Complexity: O(N)
   - Space Complexity: O(1)
4. Rotate the list by breaking it at the breakpoint and connecting the tail to the head.
   - Time Complexity: O(N)
   - Space Complexity: O(1)
*/

class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        // Edge case: If the list is null, has one node, or no rotation is needed
        if (head == null || head.next == null || k == 0) return head;

        // Calculate the length of the linked list
        ListNode current = head;
        int len = 0;

        while (current != null) {
            len++;
            current = current.next;
        }

        // Adjust k to handle cases where k > len
        k = k % len;
        if (k == 0) return head; // No rotation needed

        // Find the breakpoint
        current = head;
        int breakPoint = len - k;
        ListNode prev = null;

        for (int i = 0; i < breakPoint; i++) {
            prev = current;
            current = current.next;
        }

        // Rotate the list
        prev.next = null; // Break the list at the breakpoint
        ListNode newHead = current;

        // Find the tail of the new list and connect it to the old head
        ListNode tail = newHead;
        while (tail.next != null) {
            tail = tail.next;
        }

        tail.next = head; // Complete the rotation

        return newHead;
    }
}

/*
Time Complexity Analysis:
- Calculating the length of the list: O(N)
- Adjusting k: O(1)
- Finding the breakpoint: O(N)
- Rotating the list: O(N)
Overall: O(N)

Space Complexity Analysis:
- Only a few pointers are used for traversal and manipulation.
Overall: O(1)
*/

