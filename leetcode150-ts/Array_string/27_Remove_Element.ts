/**
 * @date 2025-07-28
 * @description DSA notes for LeetCode problem 27: Remove Element.
 */

// ## 27. Remove Element

// **Link:** https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

// ### Problem Statement:
// Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` **in-place**. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.

// Consider the number of elements in `nums` which are not equal to `val` be `k`. To get accepted, you need to do the following things:
// 1. Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`.
// 2. The remaining elements of `nums` are not important, as well as the size of `nums`.
// 3. Return `k`.

// ### Example 1:
// **Input:** `nums = [3,2,2,3]`, `val = 3`
// **Output:** `2`, `nums = [2,2,_,_]`
// **Explanation:** Your function should return `k = 2`, with the first two elements of `nums` being 2. It does not matter what you leave beyond the returned `k`.

// ### Example 2:
// **Input:** `nums = [0,1,2,2,3,0,4,2]`, `val = 2`
// **Output:** `5`, `nums = [0,1,4,0,3,_,_,_]`
// **Explanation:** Your function should return `k = 5`, with the first five elements of nums containing 0, 0, 1, 3, and 4. Note that the five elements can be returned in any order.


// ## In-Place Array Manipulation & The Two-Pointer Technique

// This problem asks us to modify an array "in-place," which means we should solve it without allocating extra memory for a new array. This is a common constraint designed to test our ability to manipulate data within its existing memory footprint, leading to space-efficient solutions ($O(1)$ space complexity).

// The **Two-Pointer Technique** is a classic and powerful algorithm paradigm for solving array-based problems. It involves using two integer pointers (indices) that traverse the array, often in different directions or at different speeds. This method is particularly effective for problems that require rearranging, partitioning, or finding pairs of elements that satisfy certain conditions.

// ### Types of Two-Pointer Approaches:
// 1.  **Opposite Direction Pointers:** One pointer starts from the beginning, and the other starts from the end. They move towards each other until they meet or cross. This is useful for problems like reversing an array or finding pairs in a sorted array.
// 2.  **Same Direction Pointers (Fast & Slow):** Both pointers start from the beginning but move at different speeds. The "fast" pointer scans ahead to find relevant data, while the "slow" pointer marks the position for the next valid element to be placed. This is the core idea behind solving this "Remove Element" problem efficiently.

// For this specific problem, we want to partition the array into two sections:
// - The first section (from index `0` to `k-1`) contains all elements that are NOT equal to `val`.
// - The second section (from index `k` to the end) can contain anything, including `val` or elements moved from the end.

// The two-pointer approach provides an elegant way to achieve this partition in a single pass.

// ## My Solution Approach

// The provided code uses a **two-pointer technique where one pointer scans the array and the other points to the last valid element position**. This is an optimized approach when the elements to be removed are rare, as it minimizes the number of element moves (swaps).

// ### Step-by-Step Explanation:

// 1.  **Initialization:**
//     - We initialize a pointer `i` at the beginning of the array (`i = 0`). This pointer will iterate through the array to inspect each element.
//     - We initialize another pointer `right` at the very end of the array (`right = nums.length - 1`). This pointer marks the boundary of the section of the array we are still concerned with.

// 2.  **Iteration:**
//     - We use a `while` loop that continues as long as `i` is less than or equal to `right`. This ensures we check every element in the considered range.

// 3.  **Logic inside the loop:**
//     - **Case 1: `nums[i]` is the value to be removed (`nums[i] === val`).**
//         - We found an element that needs to be removed.
//         - To remove it "in-place," we replace it with the element from the end of our considered range, i.e., `nums[right]`.
//         - After the swap (`nums[i] = nums[right]`), we decrement `right` (`right--`). This effectively shrinks the "valid" part of the array, discarding the element at the end (which we just moved) and the `val` at `i`.
//         - **Crucially, we DO NOT increment `i`**. Why? Because the element we just moved from `right` to `i` could also be `val`. We need to re-check the element at the current position `i` in the next iteration.

//     - **Case 2: `nums[i]` is NOT the value to be removed (`nums[i] !== val`).**
//         - This is a "good" element and should be kept in the first part of the array.
//         - Since it's already in its correct relative position (at or before the final boundary), we simply move on to the next element by incrementing our scanner pointer `i` (`i++`).

// 4.  **Termination & Return Value:**
//     - The loop terminates when `i` becomes greater than `right`.
//     - At this point, all elements from index `0` up to `i-1` are guaranteed not to be `val`. The elements beyond this point are irrelevant.
//     - Therefore, the number of valid elements, `k`, is exactly the final value of `i`. The function returns `i`.

// ### Complexity Analysis:
// -   **Time Complexity:** $O(n)$, where $n$ is the number of elements in `nums`. Both pointers `i` and `right` traverse the array at most once. In each step of the loop, either `i` is incremented or `right` is decremented, so the total number of steps is bounded by $2n$.
// -   **Space Complexity:** $O(1)$. The algorithm modifies the array in-place and uses only a few extra variables (`i`, `right`), which do not depend on the input size.

function removeElement(nums: number[], val: number): number {
    // Initialize a pointer 'right' to the last index of the array.
    // This pointer marks the end of the subarray we are considering.
    let right = nums.length - 1;

    // Initialize a pointer 'i' at the beginning of the array.
    // This pointer will scan the array from left to right.
    let i = 0;

    // Loop until the scanning pointer 'i' crosses the 'right' pointer.
    while (i <= right) {
        // Check if the current element at index 'i' is the value to be removed.
        if (nums[i] === val) {
            // If it is, replace the current element with the element from the end of the considered subarray.
            nums[i] = nums[right];
            // After the swap, the element at 'right' has been moved, so we shrink our considered subarray by one from the right.
            right--;
            // We do NOT increment 'i' here because the new element at nums[i] (which came from nums[right])
            // needs to be checked in the next iteration. It might also be 'val'.
        } else {
            // If the current element is not 'val', it's a "good" element.
            // We leave it in its place and move our scanner to the next position.
            i++;
        }
    }

    // When the loop finishes, 'i' will be the count of elements that are not equal to 'val'.
    // The first 'i' elements of the array are now the elements we want to keep.
    return i;
};
