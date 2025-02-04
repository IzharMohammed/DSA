/**
 * Problem: 3Sum
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * 
 * Brute Force Approach:
 * 1. **Using Three Nested Loops**: Iterate through all possible triplets (i, j, k) and check if their sum equals zero.
 * 2. **Sorting and Checking for Duplicates**: Store the triplets in a list and use sorting to avoid duplicates.
 * 3. **Time Complexity**: O(n^3) 
 *    - Since we are using three nested loops, this approach is inefficient for larger inputs.
 * 4. **Space Complexity**: O(n) (for storing unique triplets)
 */

import java.util.*;

class Solution {
    // Brute Force Solution
    public List<List<Integer>> threeSumBruteForce(int[] nums) {
        List<List<Integer>> lists = new ArrayList<>();

        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                for (int k = j + 1; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] == 0) {
                        List<Integer> list = Arrays.asList(nums[i], nums[j], nums[k]);
                        Collections.sort(list);
                        if (!lists.contains(list)) {
                            lists.add(list);
                        }
                    }
                }
            }
        }
        return lists;
    }

    /**
     * Optimized Approach:
     * 1. **Sorting**: First, we sort the array to easily handle duplicate triplets and efficiently find pairs.
     * 2. **Iterating with a Fixed Element**: We iterate through the array with an index `i`, fixing one element.
     *    - If `nums[i]` is the same as `nums[i-1]`, we skip to avoid duplicate triplets.
     * 3. **Two-pointer Technique**: 
     *    - Use two pointers (`left` and `right`) to find pairs that sum up to `-nums[i]`.
     *    - If the sum of three numbers is zero, add the triplet to the result.
     *    - Adjust `left` and `right` to skip duplicate values and continue searching.
     * 4. **Time Complexity**: O(n^2) 
     *    - Sorting takes O(n log n), and the two-pointer search takes O(n) for each fixed element.
     * 5. **Space Complexity**: O(1) (excluding the output list)
     */
    
    public List<List<Integer>> threeSum(int[] nums) {
        List<List<Integer>> lists = new ArrayList<>();

        Arrays.sort(nums); // Step 1: Sort the array
        int n = nums.length;

        for (int i = 0; i < n - 2; i++) {
            // Skip duplicates for 'i'
            if (i > 0 && nums[i] == nums[i - 1]) continue;

            int left = i + 1, right = n - 1;
            while (left < right) {
                int sum = nums[i] + nums[left] + nums[right];

                if (sum == 0) {
                    lists.add(Arrays.asList(nums[i], nums[left], nums[right]));

                    // Skip duplicate values for 'left' and 'right'
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sum < 0) {
                    left++; // Move left pointer to increase sum
                } else {
                    right--; // Move right pointer to decrease sum
                }
            }
        }
        return lists;
    }
}

