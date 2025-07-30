/**
 * @date 2025-07-30
 */

/**
 * ## ❓ Question
 *
 * **LeetCode Problem:** 80. Remove Duplicates from Sorted Array II
 *
 * **Link:** https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * ### Description
 *
 * Given an integer array `nums` sorted in non-decreasing order, remove some duplicates **in-place** such that each unique element appears **at most twice**. The relative order of the elements should be kept the same.
 *
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array `nums`. More formally, if there are `k` elements after removing the duplicates, then the first `k` elements of `nums` should hold the final result. It does not matter what you leave beyond the first `k` elements.
 *
 * Return `k` after placing the final result in the first `k` slots of `nums`.
 *
 * Do **not** allocate extra space for another array. You must do this by **modifying the input array in-place** with O(1) extra memory.
 *
 * ###  exemplos
 *
 * **Example 1:**
 * **Input:** `nums = [1,1,1,2,2,3]`
 * **Output:** `5`, `nums = [1,1,2,2,3,_]`
 * **Explanation:** Your function should return `k = 5`, with the first five elements of `nums` being `1, 1, 2, 2` and `3` respectively. It does not matter what you leave beyond the returned `k`.
 *
 * **Example 2:**
 * **Input:** `nums = [0,0,1,1,1,1,2,3,3]`
 * **Output:** `7`, `nums = [0,0,1,1,2,3,3,_,_]`
 * **Explanation:** Your function should return `k = 7`, with the first seven elements of `nums` being `0, 0, 1, 1, 2, 3` and `3` respectively. It does not matter what you leave beyond the returned `k`.
 */

/**
 * ## 🧑‍🏫 Theory: The Two Pointers Technique
 *
 * The **Two Pointers** technique is a very common and efficient algorithm pattern used for problems involving sorted arrays or linked lists. It involves using two integer variables that move or "point" to different indices of the data structure. By coordinating the movement of these two pointers, we can often solve problems in a single pass.
 *
 * ### Key Characteristics:
 * 1.  **In-Place Manipulation:** It's frequently used to modify an array or list without using extra space, making it very memory-efficient (O(1) space).
 * 2.  **Linear Time Complexity:** The pointers typically traverse the array once, resulting in a time complexity of O(n).
 * 3.  **Common Patterns:**
 * * **Slow and Fast Pointers:** One pointer (the "fast" one) iterates through the data to examine elements, while the other pointer (the "slow" one) keeps track of the position where the next valid element should be written. This is the pattern used in this problem.
 * * **Opposite-End Pointers:** Two pointers start at the beginning and end of the array and move towards each other. This is common in problems like finding pairs that sum to a target or reversing an array.
 *
 * ### Application in this Problem:
 *
 * For "Remove Duplicates from Sorted Array II", we need to create a modified version of the array in the same array.
 *
 * -   A **slow pointer (`k` in the code)** will mark the end of the valid, processed part of the array. Any element before index `k` is part of the final result. It essentially acts as the "write" pointer.
 * -   A **fast pointer (`i` in the code)** will iterate through the entire array from beginning to end to inspect each element. It acts as the "read" pointer.
 *
 * By comparing the element at the fast pointer (`nums[i]`) with the elements in the valid section (specifically `nums[k-2]`), we can decide whether to include `nums[i]` in our result. If we decide to include it, we copy it to `nums[k]` and advance the slow pointer `k`. Otherwise, we just advance the fast pointer `i`, effectively skipping the element.
 */

/**
 * ## 💡 My Approach: In-Place Overwriting with Two Pointers
 *
 * My solution uses the Two Pointers technique to solve the problem efficiently and in-place.
 *
 * 1.  **Base Case:** If the array has 2 or fewer elements (`nums.length <= 2`), no element can appear more than twice. Therefore, no removal is needed, and we can simply return the original length of the array.
 *
 * 2.  **Pointer Initialization:**
 * * I initialize a "write" pointer `k` to `2`. This is because the first two elements of the sorted array are always valid (e.g., `[1,1,...]` is a valid start). `k` will always point to the next position where a valid element should be placed.
 * * I use the loop variable `i` as the "read" pointer, starting from index `2`, since the first two elements are already considered part of the valid initial subarray.
 *
 * 3.  **Iteration and Logic:**
 * * The `for` loop iterates with the read pointer `i` from the third element to the end of the array.
 * * Inside the loop, the core logic is the condition `if (nums[i] != nums[k-2])`. Let's break this down:
 * * `nums[i]` is the current element we are considering.
 * * `nums[k-2]` is the second-to-last element in our current valid subarray. For example, if our valid part is `[1, 1]`, `k` is `2` and `nums[k-2]` is `nums[0]`, which is `1`.
 * * If `nums[i]` is **not equal** to `nums[k-2]`, it means the current number `nums[i]` is not a third duplicate. It could be a new number entirely (e.g., `nums` is `[1,1,2,...]` and `i` points to `2`), or the second occurrence of a number (e.g., `nums` is `[0,1,1,...]` and `i` points to the second `1`). In either case, it's a valid element to include.
 *
 * 4.  **In-Place Update:**
 * * When the condition `nums[i] != nums[k-2]` is true, we know `nums[i]` belongs in our result.
 * * We copy its value to the next available slot: `nums[k] = nums[i]`.
 * * Then, we increment our write pointer `k` to expand the valid subarray.
 *
 * 5.  **Return Value:** After the loop completes, the variable `k` holds the exact length of the modified array with at most two duplicates per element. We return `k`.
 *
 * ##  Complexity Analysis
 *
 * ### ⏰ Time Complexity: $O(n)$
 * The algorithm involves a single pass through the array. The read pointer `i` traverses from index `2` to `n-1`, where `n` is the number of elements in `nums`. Since each element is visited and processed at most once, the time complexity is linear with respect to the size of the input array.
 *
 * ### 💾 Space Complexity: $O(1)$
 * The solution modifies the array **in-place**. We only use a few variables (`k`, `i`) to keep track of indices, which consume a constant amount of extra memory regardless of the input array's size. Therefore, the space complexity is constant.
 */

function removeDuplicates(nums: number[]): number {
    // Handle the edge case where the array has 2 or fewer elements.
    // In this case, no element can appear more than twice, so no changes are needed.
    if (nums.length <= 2) {
        return nums.length;
    }

    // Initialize a "write" pointer `k` at index 2.
    // The subarray `nums[0...k-1]` will store the valid result.
    // We start at 2 because the first two elements are always allowed.
    let k = 2;

    // Use a "read" pointer `i` to iterate through the array starting from the third element.
    for (let i = 2; i < nums.length; i++) {
        // The core condition: Compare the current element `nums[i]` with the
        // element at `k-2`. `nums[k-2]` is the second-to-last element in our
        // valid subarray.
        //
        // If `nums[i]` is different from `nums[k-2]`, it means `nums[i]` is not a
        // third consecutive duplicate.
        // For example, if `nums = [1, 1, 1, 2]`, when `i=2`, `k=2`:
        // `nums[2]` (1) is EQUAL to `nums[k-2]` (which is `nums[0]`, also 1). So we skip.
        //
        // When `i=3`, `k=2`:
        // `nums[3]` (2) is NOT equal to `nums[k-2]` (which is `nums[0]`, 1). So we copy.
        if (nums[i] !== nums[k - 2]) {
            // If the condition is met, place the current element `nums[i]` at the
            // next available position `nums[k]`.
            nums[k] = nums[i];

            // Increment the write pointer `k` to expand the valid subarray.
            k++;
        }
    }

    // After the loop, `k` is the length of the array with duplicates removed.
    return k;
}