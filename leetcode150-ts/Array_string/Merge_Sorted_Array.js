//88. Merge Sorted Array
//https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

/**
 * Problem 88: Merge Sorted Array
 *
 * Given two integer arrays `nums1` and `nums2`, both sorted in non-decreasing order, and two integers `m` and `n`
 * representing the number of elements in `nums1` and `nums2` respectively:
 * - Merge `nums1` and `nums2` into a single array sorted in non-decreasing order
 * - The final sorted array should be stored inside `nums1` (modify in-place)
 * - `nums1` has a length of `m + n`, where the first `m` elements are actual values and last `n` elements are 0s
 * - `nums2` has a length of `n`
 *
 * Examples:
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * Output: [1,2,2,3,5,6]
 * 
 * Input: nums1 = [1], m = 1, nums2 = [], n = 0
 * Output: [1]
 * 
 * Input: nums1 = [0], m = 0, nums2 = [1], n = 1
 * Output: [1]
 */

/**
 * Approach: Two-Pointer Technique (Reverse/Backward Merging)
 * 
 * Key Insight: Instead of merging from the beginning (which would require shifting elements),
 * we merge from the end of the arrays backwards. This way, we can place elements directly
 * in their final positions without overwriting unprocessed elements.
 * 
 * Why this works:
 * 1. nums1 has extra space at the end (filled with 0s) - perfect for placing merged elements
 * 2. By starting from the largest elements and working backwards, we never overwrite
 *    elements that we haven't processed yet
 * 3. We compare elements from both arrays and place the larger one at the end
 * 
 * Step-by-step process:
 * 1. Set three pointers:
 *    - i: points to the last actual element in nums1 (index m-1)
 *    - j: points to the last element in nums2 (index n-1)
 *    - k: points to the last position in nums1 (index m+n-1)
 * 
 * 2. While there are elements left in nums2 (j >= 0):
 *    - Compare nums1[i] and nums2[j] (if i >= 0)
 *    - Place the larger element at position k
 *    - Move the corresponding pointer backward
 *    - Move k backward
 * 
 * 3. Why we only check j >= 0:
 *    - If nums2 is exhausted but nums1 still has elements, they're already in correct positions
 *    - If nums1 is exhausted, we need to copy remaining elements from nums2
 */

/**
 * Time Complexity: O(m + n)
 * - We process each element from both arrays exactly once
 * - Total elements processed = m + n
 * 
 * Space Complexity: O(1)
 * - We only use a constant amount of extra space for the three pointers (i, j, k)
 * - We modify nums1 in-place without using additional arrays
 */

var merge = function(nums1, m, nums2, n) {
    // Initialize three pointers
    let i = m - 1;     // Pointer for last actual element in nums1
    let j = n - 1;     // Pointer for last element in nums2
    let k = m + n - 1; // Pointer for last position in nums1 (where we'll place merged elements)
    
    // Continue until we've processed all elements from nums2
    while (j >= 0) {
        // Compare current elements from both arrays
        // Place the larger element at position k
        if (i >= 0 && nums1[i] > nums2[j]) {
            // nums1[i] is larger, so place it at position k
            nums1[k] = nums1[i];
            i--; // Move to previous element in nums1
        } else {
            // nums2[j] is larger or equal, OR nums1 is exhausted (i < 0)
            // Place nums2[j] at position k
            nums1[k] = nums2[j];
            j--; // Move to previous element in nums2
        }
        k--; // Move to previous position for next placement
    }
    
    // Note: We don't need to handle remaining elements in nums1 because:
    // - If nums1 still has elements when nums2 is exhausted, they're already in correct positions
    // - The while loop only continues while j >= 0, so it stops when nums2 is fully processed
};

/**
 * Example Walkthrough:
 * nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 
 * Initial state:
 * i = 2 (nums1[2] = 3), j = 2 (nums2[2] = 6), k = 5
 * 
 * Step 1: Compare 3 and 6 → 6 is larger
 * nums1 = [1,2,3,0,0,6], j = 1, k = 4
 * 
 * Step 2: Compare 3 and 5 → 5 is larger
 * nums1 = [1,2,3,0,5,6], j = 0, k = 3
 * 
 * Step 3: Compare 3 and 2 → 3 is larger
 * nums1 = [1,2,3,3,5,6], i = 1, k = 2
 * 
 * Step 4: Compare 2 and 2 → Equal, take from nums2
 * nums1 = [1,2,2,3,5,6], j = -1, k = 1
 * 
 * j < 0, so we stop. Final result: [1,2,2,3,5,6]
 */

/**
 * Alternative Approaches (Less Optimal):
 * 
 * 1. Merge from beginning with extra space:
 *    - Create a new array, merge both arrays into it, then copy back
 *    - Time: O(m+n), Space: O(m+n)
 * 
 * 2. Insert and sort:
 *    - Insert all elements from nums2 into nums1, then sort
 *    - Time: O((m+n)log(m+n)), Space: O(1)
 * 
 * 3. Forward merge with shifting:
 *    - Merge from beginning but shift elements when needed
 *    - Time: O(m*n), Space: O(1)
 * 
 * Our backward merge approach is optimal because it achieves O(m+n) time with O(1) space.
 */