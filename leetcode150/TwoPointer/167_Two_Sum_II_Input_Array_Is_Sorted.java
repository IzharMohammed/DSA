/**
 * Problem: 167. Two Sum II - Input Array Is Sorted
 * 
 * Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order,
 * find two numbers such that they add up to a specific target number.
 * 
 * Constraints:
 * - The array is sorted.
 * - There is exactly one solution.
 * - You may not use the same element twice.
 * - The solution must use only constant extra space.
 * 
 * Approach:
 * - Use the **two-pointer technique** since the array is sorted.
 * - Initialize two pointers:
 *   - `ptr1` at the beginning (index 0)
 *   - `ptr2` at the end (last index)
 * - Iterate while `ptr1 < ptr2`:
 *   - Compute the sum of `numbers[ptr1]` and `numbers[ptr2]`
 *   - If the sum is greater than `target`, move `ptr2` to the left (decrement `ptr2`)
 *   - If the sum is less than `target`, move `ptr1` to the right (increment `ptr1`)
 *   - If the sum matches `target`, return the 1-based indices `[ptr1 + 1, ptr2 + 1]`
 * 
 * Time Complexity: O(n) -> We traverse the array at most once.
 * Space Complexity: O(1) -> No extra space is used.
 */

class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int ptr1 = 0;  // Left pointer (start of array)
        int ptr2 = numbers.length - 1; // Right pointer (end of array)

        while (ptr1 < ptr2) { // Continue until pointers meet
            int sum = numbers[ptr1] + numbers[ptr2]; // Calculate sum of two numbers
            
            if (sum > target) {
                ptr2--; // Move right pointer left to reduce sum
            } else if (sum < target) {
                ptr1++; // Move left pointer right to increase sum
            } else {
                return new int[] { ptr1 + 1, ptr2 + 1 }; // Return 1-based indices
            }
        }

        return new int[] { -1, -1 }; // Edge case (should never be reached as one solution is guaranteed)
    }
}

