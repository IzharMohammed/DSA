/**
 * Problem: Detect if a linked list has a cycle.
 *
 * A cycle exists in a linked list if some node can be visited again by following the `next` pointers.
 * The goal is to return `true` if a cycle exists; otherwise, return `false`.
 *
 * **Approach 1: Using a HashSet**
 * - Maintain a set of visited nodes.
 * - Traverse the linked list while checking if the current node is already in the set.
 * - If the current node is found in the set, a cycle exists.
 * - If the traversal completes without finding a cycle, return `false`.
 *
 * **Time Complexity**: O(N) 
 * - Each node is visited once.
 *
 * **Space Complexity**: O(N)
 * - Additional space for the HashSet to store visited nodes.
 *
 * **Approach 2: Using Two Pointers (Floyd's Cycle Detection Algorithm)**
 * - Use two pointers:
 *     - `hare` (fast pointer): moves two steps at a time.
 *     - `tortoise` (slow pointer): moves one step at a time.
 * - If a cycle exists, the two pointers will eventually meet.
 * - If the fast pointer (`hare`) reaches the end, there is no cycle.
 *
 * **Time Complexity**: O(N)
 * - Each node is visited at most twice.
 *
 * **Space Complexity**: O(1)
 * - No additional space is used.
 */


/**
Method - 1 using HashSet 
TC:- O(n)
SC:- O(n)
 */

// No need to create the below ListNode just 

// class ListNode {
//     int val;
//     ListNode next;

//     ListNode(int val) {
//         this.val = val;
//     }
// }

// public class Solution {
//     public boolean hasCycle(ListNode head) {
//         HashSet<ListNode> visitedNode = new HashSet<>();

//         ListNode current = head;

//         while (current != null) {

//             if (visitedNode.contains(current)) {
//                 return true;
//             }

//             visitedNode.add(current);
//             current = current.next;

//         }

//         return false;
//     }
// }

/**
 * Method - 2 using Two pointer approach
 * TC:- O(n)
 * SC:- O(1)
 */
public class Solution {
    // Method to detect if the linked list has a cycle
    public boolean hasCycle(ListNode head) {
        // Initialize two pointers: hare (fast) and tortoise (slow)
        ListNode hare = head;
        ListNode tortoise = head;

        // Loop until hare and tortoise either meet (cycle) or reach the end (no cycle)
        do {
            // Check if hare has reached the end of the list (no cycle)
            if (hare == null || hare.next == null) {
                return false; // No cycle, exit and return false
            }

            // Move hare two steps (fast pointer)
            hare = hare.next.next;

            // Move tortoise one step (slow pointer)
            tortoise = tortoise.next;

        } while (hare != tortoise); // Continue until hare and tortoise meet (cycle)

        // If hare and tortoise meet, a cycle exists
        return true;
    }
}

