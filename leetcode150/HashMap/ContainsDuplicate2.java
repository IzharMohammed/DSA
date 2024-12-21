//219. Contains Duplicate 2
//https://leetcode.com/problems/contains-duplicate-ii/submissions/1479488806/?envType=study-plan-v2&envId=top-interview-150

/**
 * Problem 219: Contains Duplicate II
 *
 * Given an integer array `nums` and an integer `k`, determine if there are two distinct indices `i` and `j`
 * such that:
 * - `nums[i] == nums[j]`
 * - The absolute difference between `i` and `j` is at most `k`.
 *
 * If such indices exist, return `true`. Otherwise, return `false`.
 */

/**
 * Approach:
 * 1. Use a HashMap to store the last index of each element encountered in the array.
 * 2. Iterate through the array and for each element, check if it already exists in the HashMap.
 * 3. If it exists, calculate the difference between the current index and the previous index of that element.
 * 4. If the difference is less than or equal to `k`, return `true`.
 * 5. If the difference is greater than `k`, continue checking the next element.
 * 6. If the element does not exist in the map, add it to the map with its index.
 * 7. If no such pair is found after checking all elements, return `false`.
 */

/**
 * Time Complexity: O(n)
 * - We traverse the array once and use the HashMap operations (insert and lookup) that take O(1) on average.
 *
 * Space Complexity: O(n)
 * - We store at most `n` elements in the HashMap, where `n` is the length of the array.
 */


class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        // 1 2 3 1 --> arr[0] - arr[3] (0-3) <= 3 TRUE
        // 1 0 1 1 --> (2 - 3) <= 1 TRUE
        // 1 2 3 1 2 3 --> (0-3) <= 2 FALSE

        // add elem. to hashtable with indices
        // if we saw the same number twice sub. its indices and validate condition
        // if we get false update it to false until we get true if we get true then
        // return
        // otherwise false

        HashMap<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {

            if (map.containsKey(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) {
                return true;
            }

            map.put(nums[i],i);
        }
                // System.out.println(map);
        return false;
    }
}


