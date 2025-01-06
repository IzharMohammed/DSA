/**
 * Problem: 86. Partition List
 * 
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come
 * before nodes greater than or equal to x. The relative order of nodes in each partition must be preserved.
 * 
 * Approach:
 * 1. Create two dummy nodes, `left` and `right`, to form two separate lists.
 *    - `left` will hold nodes with values less than x.
 *    - `right` will hold nodes with values greater than or equal to x.
 * 2. Traverse the original list while appending nodes to either the `left` or `right` list based on their value.
 * 3. Connect the end of the `left` list to the start of the `right` list.
 * 4. Ensure the end of the `right` list points to null to terminate the list.
 * 5. Return the merged list starting from the first valid node after the dummy `left` node.
 * 
 * Time Complexity (TC): O(n), where n is the number of nodes in the linked list.
 *    - We traverse the linked list once.
 * Space Complexity (SC): O(n), for the new nodes created in the separate lists.
 */

class Solution {
    public ListNode partition(ListNode head, int x) {
        // Create dummy nodes for the two partitions
        ListNode left = new ListNode(0); // List for nodes less than x
        ListNode right = new ListNode(0); // List for nodes greater than or equal to x

        // Pointers to traverse and build the two lists
        ListNode current = head;
        ListNode dummyRight = right; // To keep track of the head of the right partition
        ListNode dummyLeft = left; // To keep track of the head of the left partition

        // Traverse the original linked list
        while (current != null) {
            if (current.val < x) {
                // Add node to the left partition if its value is less than x
                left.next = new ListNode(current.val);
                left = left.next; // Move the pointer forward in the left partition
            } else {
                // Add node to the right partition if its value is greater than or equal to x
                right.next = new ListNode(current.val);
                right = right.next; // Move the pointer forward in the right partition
            }

            // Move to the next node in the original list
            current = current.next;
        }

        // Ensure the end of the right list points to null
        right.next = null;

        // Connect the left and right partitions
        left.next = dummyRight.next;

        // Return the merged list starting from the first valid node in the left partition
        return dummyLeft.next;
    }
}

/**
 * Explanation of Key Steps:
 * 
 * 1. **Dummy Nodes:**
 *    - `left` and `right` are initialized as dummy nodes to simplify the list manipulation process.
 *    - `dummyLeft` and `dummyRight` retain references to the heads of the partitions.
 * 
 * 2. **Partitioning the List:**
 *    - The `while` loop iterates through the original list, checking the value of each node.
 *    - Nodes are appended to the appropriate partition (`left` or `right`) using their respective pointers.
 * 
 * 3. **Connecting Partitions:**
 *    - After traversing the list, the `left` partition is connected to the `right` partition by setting `left.next` to `dummyRight.next`.
 * 
 * 4. **Termination:**
 *    - `right.next = null` ensures the right partition ends properly.
 * 
 * 5. **Returning the Result:**
 *    - The merged list starts from `dummyLeft.next`, skipping the dummy node.
 * 
 * Complexity:
 * - **Time Complexity (TC):** O(n) because we traverse the list once.
 * - **Space Complexity (SC):** O(n) due to the additional nodes created for the partitions.
 */

