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



