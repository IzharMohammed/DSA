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

