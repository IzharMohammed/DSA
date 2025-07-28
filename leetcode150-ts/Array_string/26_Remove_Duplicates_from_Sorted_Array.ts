/**
 * @date 2025-07-29
 */

/*
 * ## ❓ Question: 26. Remove Duplicates from Sorted Array
 *
 * ### 🌐 Link
 * [https://leetcode.com/problems/remove-duplicates-from-sorted-array/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150)
 *
 * ### 📝 Description
 * Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in `nums`.
 *
 * Consider the number of unique elements of `nums` to be `k`. To get accepted, you need to do the following things:
 * - Change the array `nums` such that the first `k` elements of `nums` contain the unique elements in the order they were present in `nums` initially.
 * - The remaining elements of `nums` are not important, as well as the size of `nums`.
 * - Return `k`.
 *
 * ### 🖼️ Examples
 *
 * **Example 1:**
 * Input: `nums = [1,1,2]`
 * Output: `2`, `nums = [1,2,_]`
 * Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively. It does not matter what you leave beyond the returned `k`.
 *
 * **Example 2:**
 * Input: `nums = [0,0,1,1,1,2,2,3,3,4]`
 * Output: `5`, `nums = [0,1,2,3,4,_,_,_,_,_]`
 * Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
 */

// ------------------------------------------------------------------------------------------------
// ## 🧠 Theory: The Two-Pointers Technique
// ------------------------------------------------------------------------------------------------

/*
 * The **Two-Pointers** technique is a very common and effective pattern for solving array-based problems. It involves using two integer variables that typically move through the data structure in a coordinated way. This technique is particularly useful for problems requiring in-place modifications, finding pairs that satisfy a certain condition, or comparing elements.
 *
 * ### Key Characteristics:
 * 1.  **In-Place Modification:** It's excellent for modifying an array without using extra memory, as pointers can be used to overwrite elements. This leads to a space complexity of $O(1)$.
 * 2.  **Linear Time Complexity:** Typically, each pointer traverses the array at most once, resulting in a time complexity of $O(n)$.
 *
 * ### Common Patterns:
 * - **Slow and Fast Pointers:** One pointer (the "fast" one) iterates through the entire collection to process elements, while another pointer (the "slow" one) points to the position where the next valid element should be written. This is the pattern used in this specific problem.
 * - **Opposite Ends:** Two pointers start at the beginning and end of the array and move towards each other. This is common for problems like reversing an array or finding a pair with a specific sum in a sorted array.
 *
 * For this problem, since the array is sorted, all duplicate elements are guaranteed to be adjacent. This property is key, as it allows us to use a slow and fast pointer approach efficiently. The fast pointer scans for new, unique elements, and the slow pointer marks the end of the new, de-duplicated part of the array.
 */

// ------------------------------------------------------------------------------------------------
// ## 💡 Approach & Complexity Analysis
// ------------------------------------------------------------------------------------------------

/*
 * ### Approach
 * The provided solution elegantly uses the **Two-Pointers (Slow and Fast)** technique to solve the problem in-place.
 *
 * 1.  **Pointers Initialization:**
 * - A "fast" pointer `i` starts at the second element (`index = 1`). Its job is to iterate through the entire array to find unique elements.
 * - A "slow" pointer `j` also starts at the second element (`index = 1`). Its job is to keep track of the position where the next unique element should be placed. The first element at `index = 0` is always unique by default, so we start our checks and potential placements from `index = 1`.
 *
 * 2.  **Iteration:**
 * - The `while` loop continues as long as the fast pointer `i` is within the bounds of the array (up to the last index).
 * - Inside the loop, we compare the element at the fast pointer's position, `nums[i]`, with the element just before it, `nums[i-1]`. This check is safe because `i` starts at 1.
 *
 * 3.  **Logic:**
 * - **If `nums[i]` is a duplicate** (i.e., `nums[i] === nums[i-1]`): We simply move the fast pointer `i` forward to check the next element. The slow pointer `j` does not move, as we haven't found a new unique element to place yet.
 * - **If `nums[i]` is a unique element** (i.e., `nums[i] !== nums[i-1]`): This means we've found a new, distinct number.
 * - We copy this unique element from `nums[i]` to the position indicated by the slow pointer, `nums[j]`. This overwrites any previous duplicate that was at `nums[j]`.
 * - We then increment both pointers: `j` moves to the next available slot for a unique element, and `i` moves to continue scanning the rest of the array.
 *
 * 4.  **Termination & Result:**
 * - The loop terminates when `i` has traversed the entire array.
 * - At this point, the slow pointer `j` is positioned one index after the last unique element. Therefore, `j` itself represents the count of unique elements (`k`).
 * - The function returns `j`. The first `j` elements of the `nums` array now contain the unique elements in their original relative order.
 *
 * ### Complexity Analysis
 *
 * - **Time Complexity: $O(n)$**
 * The fast pointer `i` traverses the array from the second element to the end exactly once. Each element is visited and processed a constant number of times. Therefore, the time complexity is linear with respect to the number of elements `n` in the array.
 *
 * - **Space Complexity: $O(1)$**
 * The algorithm modifies the array **in-place**. It does not use any additional data structures whose size depends on the input array's size. Only a few variables (`i`, `j`, `length`) are used for pointers and loop control, which consume constant extra space.
 */

// ------------------------------------------------------------------------------------------------
// ## 💻 Code Implementation
// ------------------------------------------------------------------------------------------------

/**
 * Removes duplicates from a sorted array in-place.
 * @param {number[]} nums - A sorted integer array.
 * @returns {number} The number of unique elements (k). The first k elements of nums are modified to be the unique elements.
 */
function removeDuplicates(nums: number[]): number {
    // If the array has 0 or 1 elements, no duplicates are possible.
    if (nums.length < 2) {
        return nums.length;
    }

    // Initialize 'i' as the fast pointer, starting from the second element.
    let i = 1;
    // Initialize 'j' as the slow pointer, marking the position for the next unique element.
    // Since nums[0] is always unique in the context of the new array, we start j at 1.
    let j = 1;
    // Cache the last valid index of the array for the loop condition.
    const lastIndex = nums.length - 1;

    // Loop with the fast pointer 'i' until it has checked every element.
    while (i <= lastIndex) {
        // Compare the current element with the one just before it.
        // Since the array is sorted, duplicates will always be adjacent.
        if (nums[i] === nums[i - 1]) {
            // If the element is a duplicate, we only increment the fast pointer 'i'
            // to move on and check the next element. The slow pointer 'j' waits.
            i++;
        } else {    
            // If the element is unique (i.e., different from the previous one)...
            // We place this new unique element at the position marked by the slow pointer 'j'.
            nums[j] = nums[i];
            // Then, we increment the slow pointer 'j' to prepare for the next unique element.
            j++;
            // And we increment the fast pointer 'i' to continue scanning the array.
            i++;
        }
    }

    // After the loop, 'j' is the count of unique elements, as it's the length
    // of the modified part of the array (e.g., if j=2, unique elements are at indices 0 and 1).
    return j;
};