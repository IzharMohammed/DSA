/*
LeetCode 1. Two Sum
Problem Link: https://leetcode.com/problems/two-sum/description/

Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target. Each input has exactly one solution, and you may not use 
the same element twice. Return the answer in any order.

Approach:
1. Hash Map (One-pass):
   - We use a hash map to store each number's index as we iterate through the array
   - For each number, calculate its complement (target - current number)
   - If complement exists in the map, return current index and complement's index
   - Otherwise, store current number and its index in the map
   - This ensures O(n) time complexity with O(n) space complexity

Time Complexity: O(n) - Single pass through the array
Space Complexity: O(n) - Storage for the hash map in worst case
*/

function twoSum(nums: number[], target: number): number[] {
    // Create a map to store number to index mappings
    const numMap = new Map<number, number>();
    
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement needed to reach target
        const complement = target - nums[i];
        
        // Check if complement exists in the map
        if (numMap.has(complement)) {
            // Return indices if complement found
            return [numMap.get(complement)!, i];
        }
        
        // Store current number and its index in the map
        numMap.set(nums[i], i);
    }
    
    // Return empty array if no solution found (though problem states one exists)
    return [];
}

/* 
Alternative Brute Force Approach (Commented Out):
Time Complexity: O(n²) - Nested loops checking all pairs
Space Complexity: O(1) - No additional storage needed

function twoSumBruteForce(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
*/

// Test Cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2]
console.log(twoSum([3, 3], 6));         // Output: [0, 1]