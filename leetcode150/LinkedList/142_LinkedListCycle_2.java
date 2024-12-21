/*
142. LinkedList Cycle 2
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:


Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:


Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.


 * **Approach**:
 * This problem can be solved using Floyd's Cycle Detection Algorithm, which involves two phases:
 *
 * 1. **Cycle Detection (Phase 1)**:
 *    - Use two pointers:
 *        - `hare` (fast pointer): moves two steps at a time.
 *        - `tortoise` (slow pointer): moves one step at a time.
 *    - If there is a cycle, these two pointers will eventually meet.
 *    - If the fast pointer (`hare`) reaches the end of the list, then there is no cycle.
 *
 * 2. **Finding the Start of the Cycle (Phase 2)**:
 *    - Reset the fast pointer (`hare`) to the head of the list.
 *    - Move both `hare` and `tortoise` one step at a time until they meet again.
 *    - The meeting point will be the starting node of the cycle.
 *
 * **Time Complexity**: O(N)
 * - Phase 1: O(N) to detect the cycle.
 * - Phase 2: O(N) to find the starting node of the cycle.
 *
 * **Space Complexity**: O(1)
 * - No additional space is used beyond the two pointers.
 *
 * **Edge Cases**:
 * - Empty list: Return null.
 * - Single-node list: Return null unless it forms a cycle.
 * - No cycle: Return null.

*/

// link:- https://leetcode.com/problems/linked-list-cycle-ii

/**
 * Definition for singly-linked list.
 * class ListNode {
 * int val;
 * ListNode next;
 * ListNode(int x) {
 * val = x;
 * next = null;
 * }
 * }
 */

public class Solution {
    // Method to detect the starting node of the cycle in a linked list
    public ListNode detectCycle(ListNode head) {
        // Initialize two pointers: hare (fast) and tortoise (slow)
        ListNode hare = head;
        ListNode tortoise = head;

        // Phase 1: Detect if a cycle exists
        do {
            // If hare reaches the end of the list, no cycle exists
            if (hare == null || hare.next == null) {
                return null; // Return null as there is no cycle
            }

            // Move hare two steps forward (fast pointer)
            hare = hare.next.next;

            // Move tortoise one step forward (slow pointer)
            tortoise = tortoise.next;
        } while (hare != tortoise); // Loop until hare and tortoise meet

        // Phase 2: Find the start of the cycle
        // Reset hare to the head of the list
        hare = head;

        // Move both hare and tortoise one step at a time
        while (tortoise != hare) {
            hare = hare.next;        // Move hare one step forward
            tortoise = tortoise.next; // Move tortoise one step forward
        }

        // Return the node where both pointers meet, which is the start of the cycle
        return hare;
    }
}



