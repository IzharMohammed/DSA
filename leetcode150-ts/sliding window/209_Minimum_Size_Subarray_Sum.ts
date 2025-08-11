/**
 * LeetCode Problem 209: Minimum Size Subarray Sum
 * Problem Link: https://leetcode.com/problems/minimum-size-subarray-sum/
 * 
 * PROBLEM DESCRIPTION:
 * Given an array of positive integers nums and a positive integer target,
 * return the minimal length of a subarray whose sum is greater than or equal to target.
 * If there is no such subarray, return 0 instead.
 * 
 * THEORY & CONCEPTS:
 * 
 * 1. SLIDING WINDOW TECHNIQUE:
 *    - A two-pointer approach where we maintain a dynamic window [left, right]
 *    - Expand window by moving 'right' pointer to include more elements
 *    - Contract window by moving 'left' pointer to find minimal valid window
 *    - Key insight: Once sum >= target, try to minimize window from left
 *    - Optimal for subarray problems with sum/length constraints
 *    - Time: O(n) vs O(n²) brute force, Space: O(1)
 * 
 * 2. GREEDY APPROACH:
 *    - For each right position, find the leftmost valid window
 *    - Always try to shrink window when condition is satisfied
 *    - Keep track of minimum window size found so far
 * 
 * 3. WHY SLIDING WINDOW WORKS HERE:
 *    - All numbers are positive (monotonic property)
 *    - Adding elements increases sum, removing decreases sum
 *    - If sum >= target at [left, right], then sum >= target at [left, right+k]
 *    - We can safely shrink from left without missing optimal solutions
 * 
 * ALGORITHM WALKTHROUGH:
 * Example: target = 7, nums = [2,3,1,2,4,3]
 * 
 * Step 1: right=0, sum=2, window=[2], sum < 7, expand
 * Step 2: right=1, sum=5, window=[2,3], sum < 7, expand  
 * Step 3: right=2, sum=6, window=[2,3,1], sum < 7, expand
 * Step 4: right=3, sum=8, window=[2,3,1,2], sum >= 7, found valid!
 *         min_len = 4, try shrinking:
 *         - Remove nums[0]=2, sum=6, sum < 7, stop shrinking
 * Step 5: right=4, sum=10, window=[3,1,2,4], sum >= 7, found valid!
 *         min_len = 4, try shrinking:
 *         - Remove nums[1]=3, sum=7, sum >= 7, min_len = 3, continue
 *         - Remove nums[2]=1, sum=6, sum < 7, stop shrinking  
 * Step 6: right=5, sum=9, window=[2,4,3], sum >= 7, found valid!
 *         min_len = 3, try shrinking:
 *         - Remove nums[3]=2, sum=7, sum >= 7, min_len = 2, continue
 *         - Remove nums[4]=4, sum=3, sum < 7, stop shrinking
 * 
 * Final result: min_len = 2, subarray = [4,3]
 */

function minSubArrayLen(target: number, nums: number[]): number {
    // Left pointer of sliding window (start of current subarray)
    let left = 0;

    // Track minimum length found so far
    // Using Infinity as initial value to detect if no valid subarray exists
    let min_len = Infinity;

    // Current sum of elements in the sliding window
    // Note: Variable name is misleading - it's actually current sum, not length
    let curr_len = 0;

    // Right pointer of sliding window (end of current subarray)
    // Iterate through array expanding the window
    for (let right = 0; right < nums.length; right++) {
        // WINDOW EXPANSION: Add current element to window sum
        curr_len += nums[right];

        // WINDOW CONTRACTION: While current sum meets target requirement
        // Try to find the smallest valid window by shrinking from left
        while (curr_len >= target) {
            // Update minimum length if current window is smaller
            // Window size = right - left + 1
            min_len = Math.min(min_len, right - left + 1);

            // Shrink window: remove leftmost element and move left pointer
            curr_len -= nums[left];
            left++;
        }
        // After while loop: curr_len < target, so current window is invalid
        // Continue expanding by moving right pointer in next iteration
    }

    // Return result: 0 if no valid subarray found, otherwise minimum length
    return min_len === Infinity ? 0 : min_len;
}

/**
 * TIME COMPLEXITY: O(n)
 * - Each element is visited at most twice:
 *   * Once when right pointer passes over it (expansion)
 *   * Once when left pointer passes over it (contraction)
 * - Total operations: O(2n) = O(n)
 * - This is optimal since we must examine each element at least once
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using a constant amount of extra variables
 * - No additional data structures that grow with input size
 * - Variables used: left, min_len, curr_len (all scalars)
 * 
 * WHY THIS IS OPTIMAL:
 * - Lower bound: Must examine each element at least once = Ω(n)
 * - Upper bound: Each element examined at most twice = O(n)  
 * - Therefore: Optimal time complexity = Θ(n)
 * 
 * EXAMPLES:
 * 1. target = 7, nums = [2,3,1,2,4,3] → Output: 2 (subarray [4,3])
 * 2. target = 4, nums = [1,4,4] → Output: 1 (subarray [4])
 * 3. target = 11, nums = [1,1,1,1,1,1,1,1] → Output: 0 (no valid subarray)
 * 4. target = 15, nums = [5,1,3,5,10,7,4,9,2,8] → Output: 2 (subarray [5,10])
 * 
 * EDGE CASES HANDLED:
 * - No valid subarray exists: returns 0
 * - Single element >= target: returns 1
 * - Entire array needed: returns array length
 * - Multiple valid subarrays: returns minimum length
 * - Array with one element: handled correctly
 * 
 * KEY INSIGHTS:
 * 1. Positive integers ensure monotonic sum property
 * 2. Greedy approach works: always try to minimize current valid window
 * 3. Two pointers move independently based on sum condition
 * 4. We never need to backtrack or re-examine previous positions
 * 5. Using Infinity allows clean detection of "no solution" case
 * 
 * ALTERNATIVE APPROACHES:
 * 1. Brute Force: O(n²) - Check all subarrays
 * 2. Binary Search + Prefix Sum: O(n log n) - Good for multiple queries
 * 3. Sliding Window: O(n) - Optimal for single query (this solution)
 * 
 * WHEN TO USE SLIDING WINDOW:
 * - Subarray/substring problems with constraints
 * - Need to find optimal window (min/max size)
 * - Monotonic properties exist (positive numbers here)
 * - Single pass solution is possible
 */