/*
LeetCode 189. Rotate Array
Link: https://leetcode.com/problems/rotate-array/description/

Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

Example 1:
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]

Example 2:
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]

Approach:
1. The optimized solution uses array reversal for O(n) time and O(1) space
2. Key steps:
   a. Handle cases where k > array length using modulo
   b. Reverse the entire array
   c. Reverse the first k elements
   d. Reverse the remaining elements
3. This approach is based on the mathematical property that rotating an array is equivalent to three reversals

Time Complexity: O(n) - We pass through the array a constant number of times
Space Complexity: O(1) - All operations are done in-place
*/

/**
 * Rotates the array to the right by k steps (in-place)
 * @param nums The array to rotate
 * @param k Number of steps to rotate
 */
function rotate(nums: number[], k: number): void {
    const n = nums.length;
    // Handle cases where k is larger than array length
    k = k % n;

    // Reverse entire array to bring last elements to front
    reverse(nums, 0, n - 1);
    // Reverse first k elements to restore their original order
    reverse(nums, 0, k - 1);
    // Reverse remaining elements to restore their original order
    reverse(nums, k, n - 1);

    /* Alternative approach - O(n*k) time complexity
    for(let i = 0; i < k; i++){
        moveLastToFirst(nums)
    }
    */
};

/**
 * Reverses a portion of an array in-place
 * @param arr The array to modify
 * @param start Starting index of the portion to reverse
 * @param end Ending index of the portion to reverse
 */
function reverse(arr: number[], start: number, end: number): void {
    // Use two pointers to swap elements from ends toward center
    while (start < end) {
        // Traditional swap using temp variable
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        // Move pointers toward center
        start++;
        end--;
    }
}

/**
 * Moves the last element of an array to the first position (in-place)
 * @param arr The array to modify
 */
function moveLastToFirst(arr: number[]): void {
    if (arr.length === 0) return;
    // Remove last element and add it to beginning
    arr.unshift(arr.pop()!);
}

/* 
Theory Explanation:
The rotation problem can be thought of as moving the last k elements to the front while
maintaining their order. The reversal approach works because:

1. Full reversal puts the last k elements at the front, but in reverse order
2. Reversing the first k elements restores their original order
3. Reversing the remaining elements restores their original order

For example, with nums = [1,2,3,4,5,6,7] and k = 3:
1. Full reverse: [7,6,5,4,3,2,1]
2. Reverse first 3: [5,6,7,4,3,2,1]
3. Reverse rest: [5,6,7,1,2,3,4]

This approach is optimal because:
- It requires exactly 3 passes through the array
- No additional space is needed beyond a few variables
- It handles all edge cases (empty array, k=0, k>n)
*/
