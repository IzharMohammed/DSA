/*
Problem: Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

Approach Documentation:

Method 1: Brute Force (Using LinkedHashMap)
-------------------------------------------
1. Traverse the linked list and store the frequency of each node value in a LinkedHashMap.
   - This ensures the insertion order is preserved and allows us to track duplicates.
   - Time Complexity: O(n) for traversal of the list.
   - Space Complexity: O(n) for storing the frequencies in a map.

2. Create a new linked list and iterate through the original linked list.
   - For each node, check if its frequency in the map is 1 (i.e., distinct).
   - Add nodes with a frequency of 1 to the new list.
   - Time Complexity: O(n) for traversal of the list.
   - Space Complexity: O(1) additional space apart from the map.

Overall Complexity:
- Time Complexity: O(n) + O(n) = O(n)
- Space Complexity: O(n) for the map.

Method 2: Efficient Two-Pointer Approach
-----------------------------------------
1. Use a dummy node to simplify edge cases and initialize two pointers: `prev` pointing to the dummy node and `curr` pointing to the head.

2. Traverse the linked list:
   - If the current node and the next node have the same value, skip all nodes with this value.
   - Link the `prev` node to the node after the duplicates.
   - If no duplicate is found, simply move the `prev` pointer forward.

3. Continue until the end of the list.
   - Time Complexity: O(n), as each node is visited at most twice.
   - Space Complexity: O(1), as no additional data structures are used.

Overall Complexity:
- Time Complexity: O(n)
- Space Complexity: O(1)
*/

/* M - 1 (Brute Force) */
/*
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        LinkedHashMap<Integer, Integer> map = new LinkedHashMap<>();
        ListNode current = head;
        while (current != null) {
            // M-1
            
            // if (map.containsKey(current.val)) {
            //     map.put(current.val, map.get(current.val) + 1);
            // } else {
            //     map.put(current.val, 1);
            // }

            // M-2
            map.put(current.val,
                    map.getOrDefault(current.val, 0) + 1);
            current = current.next;
        }
        System.out.println(map);
        ListNode dummy = new ListNode(-1);
        ListNode curr1 = dummy;

        // M-1
        // for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
        //     if (entry.getValue() == 1) {
        //         curr1.next = new ListNode(entry.getKey());
        //         curr1 = curr1.next;
        //     }
        // }

        // M - 2
        current = head;
        while(current != null){
            if(map.get(current.val
            ) == 1){
            curr1.next = new ListNode(current.val);
            curr1 = curr1.next;        
            }
            current= current.next;
        }
        return dummy.next;
    }
}
*/

/* M - 2 (Efficient) */
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode dummy = new ListNode(-1); // Dummy node to handle edge cases.
        dummy.next = head;
        ListNode prev = dummy; // Pointer to track the last distinct node.
        ListNode curr = head; // Pointer to traverse the list.
        while (curr != null) {
            // Check for duplicates by comparing current node with the next node.
            if (curr.next != null && curr.val == curr.next.val) {
                // Skip all nodes with the same value.
                while (curr.next != null && curr.val == curr.next.val) {
                    curr = curr.next;
                }
                // Link prev to the node after duplicates.
                prev.next = curr.next;
            } else {
                // No duplicates found, move prev pointer forward.
                prev = prev.next;
            }
            // Move current pointer forward.
            curr = curr.next;
        }
        return dummy.next; // Return the new head of the modified list.
    }
}

