/**
 * Finds two numbers in a sorted array that add up to a target and returns their 1-based indices.
 * 
 * Approach:
 * 1. Use a two-pointer technique where one pointer (`left`) starts at the beginning (smallest element)
 *    and the other (`right`) starts at the end (largest element) of the sorted array.
 * 2. Calculate the sum of the elements at the two pointers:
 *    - If the sum equals the target, return the 1-based indices of the two elements.
 *    - If the sum is greater than the target, move the `right` pointer left to decrease the sum.
 *    - If the sum is less than the target, move the `left` pointer right to increase the sum.
 * 3. Repeat until the two pointers meet, ensuring we explore all possible pairs efficiently.
 * 
 * Intuition:
 * - The array is sorted, so moving the `left` pointer right increases the sum, while moving the `right`
 *   pointer left decreases the sum. This allows us to efficiently narrow down to the correct pair.
 * - The two-pointer technique exploits the sorted property to avoid unnecessary checks, making it optimal.
 * 
 * Time Complexity (TC): O(n), where n is the number of elements in the array. In the worst case, we traverse the array once.
 * Space Complexity (SC): O(1), as we use a constant amount of extra space (two pointers).
 * 
 * Problem Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 * 
 * @param numbers A 1-indexed sorted array of integers in non-decreasing order.
 * @param target The target sum to achieve.
 * @returns An array of two 1-based indices [index1, index2] whose values sum to the target.
 */
function twoSum(numbers: number[], target: number): number[] {
    let left = 0; // Pointer starting at the beginning (0-based index)
    let right = numbers.length - 1; // Pointer starting at the end (0-based index)

    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum > target) {
            right--; // Decrease the sum by moving the right pointer left
        } else if (sum < target) {
            left++; // Increase the sum by moving the left pointer right
        } else {
            return [left + 1, right + 1]; // Return 1-based indices when sum matches target
        }
    }

    return [-1, -1]; // Return [-1, -1] if no solution found (though problem states there is one)
}

// Example Test Cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [1, 2] (2 + 7 = 9)
console.log(twoSum([2, 3, 4], 6));      // Output: [1, 3] (2 + 4 = 6)
console.log(twoSum([-1, 0], -1));       // Output: [1, 2] (-1 + 0 = -1)