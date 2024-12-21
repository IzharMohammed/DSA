// Link:- https://leetcode.com/problems/reverse-linked-list/submissions/1484750243/
// 206. Reverse Linked List
/*
 * 
 Problem statement:- Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: [] */

/**
 * Problem: Reverse a singly linked list.
 *
 * Approach Documentation:
 *
 * **M-1: Using Stacks**
 * - **Idea**: Utilize a stack to reverse the order of the node values.
 * - Steps:
 *   1. Traverse the list and push all node values onto a stack.
 *   2. Create a new list and populate it with the values popped from the stack.
 *   3. This gives a reversed list, but at the cost of \(O(N)\) space complexity.
 * - **Time Complexity**: \(O(N)\) (One traversal to push values, another to create the reversed list)
 * - **Space Complexity**: \(O(N)\) (Space required for the stack)
 *
 * **M-2: Manipulating Pointers**
 * - **Idea**: Reverse the pointers of the nodes directly without using extra space.
 * - Steps:
 *   1. Initialize two pointers: `prevNode` (starting as null) and `currNode` (starting at the head).
 *   2. Iteratively update the `next` pointer of `currNode` to point to `prevNode`.
 *   3. Move the `prevNode` and `currNode` pointers one step forward.
 *   4. Once the traversal is complete, the list is reversed, and `prevNode` becomes the new head.
 * - **Time Complexity**: \(O(N)\) (Single traversal of the list)
 * - **Space Complexity**: \(O(1)\) (In-place reversal without extra memory)
 */

/**
 * M-1: Using Stacks
 * TC:- O(N)
 * SC:- O(N)
 *
 * Solution for M-1:
 * public class Solution {
 *     public ListNode reverseList(ListNode head) {
 *         // Create a stack to store node values
 *         Stack<Integer> valueStack = new Stack<>();
 *
 *         // Traverse the list and push values onto the stack
 *         while (head != null) {
 *             valueStack.push(head.val); // Store the current node's value
 *             head = head.next;          // Move to the next node
 *         }
 *
 *         // Create a new list to hold the reversed nodes
 *         ListNode reverseList = new ListNode(Integer.MIN_VALUE); // Dummy head node
 *         ListNode ptr = reverseList; // Pointer to build the reversed list
 *
 *         // Pop values from the stack and create nodes
 *         while (!valueStack.isEmpty()) {
 *             ptr.next = new ListNode(valueStack.pop()); // Add a new node with the top value
 *             ptr = ptr.next; // Move to the next node in the reversed list
 *         }
 *
 *         // Return the new list without the dummy head
 *         return reverseList.next;
 *     }
 * }
 */


class Solution {
    public ListNode reverseList(ListNode head) {
        // Edge case: If the list is empty, return null
        if (head == null) {
            return head; // No nodes to reverse
        }

        // Edge case: If there's only one node, it's already reversed
        if (head.next == null) {
            return head; // Single-node list remains unchanged
        }

        // Pointer to the current node being processed
        ListNode currNode = head;
        // Pointer to the previous node (initialized as null for the head node)
        ListNode prevNode = null;

        // Traverse the list while reversing the links between nodes
        while (currNode != null) {
            // Save the next node before breaking the link
            ListNode NextNode = currNode.next;
            // Reverse the current node's pointer to point to the previous node
            currNode.next = prevNode;
            // Move the previous node pointer to the current node
            prevNode = currNode;
            // Move to the next node in the original list
            currNode = NextNode;
        }

        // Update the head pointer to the new head (previous tail node)
        head = prevNode;

        // Return the new head of the reversed list
        return head;
    }
}


