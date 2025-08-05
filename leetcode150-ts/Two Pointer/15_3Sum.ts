/**
 * @problem
 * LeetCode 15: 3Sum
 *
 * @link
 * https://leetcode.com/problems/3sum/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * @description
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *
 * Notice that the solution set must not contain duplicate triplets.
 *
 * @example
 * Input: nums = [-1,0,1,2,-1,-4]
 * Output: [[-1,-1,2],[-1,0,1]]
 *
 * @example
 * Input: nums = [0,1,1]
 * Output: []
 *
 * @example
 * Input: nums = [0,0,0]
 * Output: [[0,0,0]]
 */

// =================================================================================================
// APPROACH
// =================================================================================================
/**
 * The problem asks for unique triplets that sum to zero. A brute-force approach would be to use
 * three nested loops, which would result in an O(n^3) time complexity. We can optimize this
 * significantly by using a two-pointer technique after sorting the array.
 *
 * The Two-Pointer Approach:
 *
 * 1.  **Sort the Array**: The first and most crucial step is to sort the input array `nums`.
 * This allows us to easily handle duplicates and use the two-pointer method efficiently.
 *
 * 2.  **Iterate with a Primary Pointer**: We loop through the sorted array with a single pointer `i`.
 * The element `nums[i]` will be the first number in our potential triplet.
 *
 * 3.  **Skip Duplicates for the First Element**: To ensure the final result contains unique triplets,
 * we must handle duplicates. If our current element `nums[i]` is the same as the previous
 * element `nums[i-1]`, it means we have already processed all possible triplets for this
 * number. So, we skip the current iteration to avoid duplicate work and results.
 *
 * 4.  **Two-Pointer Sub-problem**: For each `nums[i]`, our goal is to find two other numbers in the
 * rest of the array (from index `i+1` to the end) that sum up to `-nums[i]`. This is a
 * classic "Two Sum" problem on a sorted array.
 *
 * 5.  **Initialize Pointers**: We initialize a `left` pointer at `i + 1` and a `right` pointer
 * at the end of the array (`nums.length - 1`).
 *
 * 6.  **Move Pointers Inward**: We move the `left` and `right` pointers toward each other based on
 * the sum of the current triplet (`nums[i] + nums[left] + nums[right]`):
 * - If `sum === 0`: We've found a valid triplet. We add it to our result list. Then, to
 * avoid duplicate triplets from the same `nums[i]`, we must skip any duplicate values
 * for `nums[left]` and `nums[right]` before continuing the search.
 * - If `sum < 0`: The sum is too small. To increase it, we need a larger number, so we
 * increment the `left` pointer.
 * - If `sum > 0`: The sum is too large. To decrease it, we need a smaller number, so we
 * decrement the `right` pointer.
 *
 * 7.  **Termination**: The inner `while` loop continues until `left` and `right` pointers cross,
 * at which point we move to the next element `nums[i]` in the outer loop.
 */

// =================================================================================================
// TIME AND SPACE COMPLEXITY
// =================================================================================================
/**
 * Time Complexity: O(n^2)
 * - The initial sort of the array takes O(n log n) time.
 * - The main `for` loop runs up to `n-2` times. Inside it, the `while` loop with the two
 * pointers (`left` and `right`) runs at most `n` times for each `i`. This nested loop
 * structure gives us a complexity of O(n^2).
 * - Since O(n^2) is dominant over O(n log n), the total time complexity is O(n^2).
 *
 * Space Complexity: O(log n) or O(n)
 * - This depends on the space complexity of the sorting algorithm implemented in the
 * JavaScript/TypeScript runtime. Timsort (used in V8/Node.js) or Mergesort can take
 * O(n) space, while Quicksort might take O(log n) on average.
 * - If we exclude the space required for the output array `result`, the space complexity
 * is dominated by the sort. If we include it, the space could be larger, but it's
 * standard practice to analyze the auxiliary space used by the algorithm itself.
 */

function threeSum(nums: number[]): number[][] {
    // First, sort the array in non-decreasing order.
    // This is crucial for the two-pointer approach and for handling duplicates.
    nums.sort((a, b) => a - b);
    const result: number[][] = [];

    // Iterate through the array to pick the first element of the triplet.
    // We only need to go up to `nums.length - 2` because we need at least two more elements.
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements for the first number of the triplet.
        // If the current element is the same as the previous one, it means we have already
        // considered all possible triplets starting with this number.
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // Initialize two pointers: one at the element after `i`, and one at the end of the array.
        let left = i + 1;
        let right = nums.length - 1;

        // Use the two-pointer technique to find the other two elements of the triplet.
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // We found a triplet that sums to zero.
                result.push([nums[i], nums[left], nums[right]]);

                // To avoid duplicate triplets, we need to skip over any duplicate elements
                // for the second and third numbers of the triplet.
                // Move the left pointer forward as long as it's a duplicate.
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Move the right pointer backward as long as it's a duplicate.
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Move both pointers to continue searching for new, unique triplets.
                left++;
                right--;
            } else if (sum < 0) {
                // The sum is too small, so we need a larger number.
                // Move the left pointer to the right.
                left++;
            } else { // sum > 0
                // The sum is too large, so we need a smaller number.
                // Move the right pointer to the left.
                right--;
            }
        }
    }

    // Return the array of unique triplets.
    return result;
}


/**
 * Alternative Hash Map Solutio
 * 
 * Time Complexity: O(n²)
 * Space Complexity: O(n) for hash map
 * 
 * Note: The two-pointer solution is generally preferred as it has better
 * constant factors and doesn't require extra space for the hash map.
 */

/*
function threeSumHash(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        
        const target = -nums[i];
        const seen = new Map<number, boolean>();
        
        for (let j = i + 1; j < nums.length; j++) {
            const complement = target - nums[j];
            
            if (seen.has(complement)) {
                result.push([nums[i], complement, nums[j]]);
                while (j < nums.length - 1 && nums[j] === nums[j + 1]) j++;
            }
            
            seen.set(nums[j], true);
        }
    }
    
    return result;
}
*/