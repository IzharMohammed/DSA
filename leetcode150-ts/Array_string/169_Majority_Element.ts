/**
 * @date 2025-07-30
 */

/**
 * ## ❓ Question
 *
 * **LeetCode Problem:** 169. Majority Element
 *
 * **Link:** https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
 *
 * ### Description
 *
 * Given an array `nums` of size `n`, return the majority element.
 *
 * The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.
 *
 * ### Exemplos
 *
 * **Example 1:**
 * **Input:** `nums = [3,2,3]`
 * **Output:** `3`
 *
 * **Example 2:**
 * **Input:** `nums = [2,2,1,1,1,2,2]`
 * **Output:** `2`
 */

/**
 * ## 🧑‍🏫 Theory: Boyer-Moore Voting Algorithm
 *
 * The **Boyer-Moore Voting Algorithm** is an efficient and elegant algorithm used to find the majority element in a sequence. A majority element is an element that appears more than `n/2` times, where `n` is the size of the sequence.
 *
 * ### The Core Idea 💡
 *
 * The algorithm works on a simple but clever observation: if we cancel out each occurrence of a majority element with an occurrence of a non-majority element, the majority element will still remain at the end.
 *
 * Imagine you have a bag of colored balls, and you know one color makes up more than half the balls. You can find that majority color by repeatedly picking two balls of different colors and discarding them. Since the majority color balls are more numerous, they will be the only color left in the bag after this process is complete.
 *
 * ### How it Works
 *
 * 1.  **Initialize:** Choose a `candidate` element and a `count`, initialized to 0.
 * 2.  **Iterate:** Traverse the array element by element.
 * 3.  **Vote:**
 * - If `count` is 0, it means we don't have an active candidate. We select the current element as the new `candidate` and set its `count` to 1.
 * - If the current element is the **same** as the `candidate`, we **increment** `count`.
 * - If the current element is **different** from the `candidate`, we **decrement** `count`.
 *
 * At the end of the traversal, the `candidate` variable will hold the majority element. This is guaranteed because the majority element has more occurrences than all other elements combined, so it can't be fully "cancelled out".
 */

/**
 * ## 💡 My Approach: Boyer-Moore Voting Algorithm
 *
 * My chosen solution implements the Boyer-Moore Voting Algorithm, which is the most optimal approach for this problem in terms of time and space complexity.
 *
 * 1.  **Initialization:** I start with a `count` of `0` and a `candidate` variable set to `null`. The `candidate` will store our current guess for the majority element.
 *
 * 2.  **Single Pass Iteration:** I loop through each number (`num`) in the `nums` array.
 *
 * 3.  **Candidate Management:**
 * - Inside the loop, the first check is `if (count === 0)`. This condition is true at the very beginning or whenever the previous candidate has been completely "cancelled out" by an equal number of different elements. When this happens, I nominate the current `num` as the new `candidate`.
 *
 * 4.  **Voting Process:**
 * - A ternary operator `count += (num === candidate) ? 1 : -1;` elegantly handles the voting.
 * - If the current `num` matches the `candidate`, the `count` is incremented by 1 (a vote for).
 * - If they don't match, the `count` is decremented by 1 (a vote against).
 *
 * 5.  **Result:** The problem guarantees a majority element exists. Because of this, the `candidate` remaining after the loop finishes is guaranteed to be the majority element. I return this `candidate`. The non-null assertion operator (`!`) is used because TypeScript cannot infer that `candidate` will not be `null` after the loop, but we know it will be, given the problem constraints.
 *
 * ### Alternative (Less Optimal) Approach
 *
 * The commented-out code in the original submission shows a sorting-based approach.
 * - **Logic:** If you sort the array, the majority element (which appears > n/2 times) is guaranteed to be at the middle index (`nums[Math.floor(n/2)]`).
 * - **Complexity:** This would be $O(n \log n)$ time due to sorting and $O(1)$ or $O(\log n)$ space depending on the sort implementation. The Boyer-Moore approach is superior with its $O(n)$ time complexity.
 *
 * ##  Complexity Analysis (Boyer-Moore)
 *
 * ### ⏰ Time Complexity: $O(n)$
 * The algorithm iterates through the input array `nums` exactly once. All operations inside the loop are constant time. This results in a linear time complexity, which is highly efficient.
 *
 * ### 💾 Space Complexity: $O(1)$
 * The algorithm uses only two extra variables (`count` and `candidate`), regardless of the size of the input array. This means it uses constant extra space.
 */


function majorityElement(nums: number[]): number {
    /*
    // Approach -1 TC:- O(n log n) (Due to sort function) SC:- O(1) or O(log n)

     // const target = Math.floor(nums.length/2);

    // nums.sort((a,b)=>a-b);
    // let count = 1;
    // let i = 1;

    // while(count <= target){
    //     if(nums[i]===nums[i-1]){
    //         count++;
    //         i++;
    //     }else{
    //         count=1;
    //         i++;
    //     }
    // }

    // return nums[i-1];
    */

    // Approach - 2 TC:- O(n) SC:- O(1)
    // This is the Boyer-Moore Voting Algorithm.

    // `count` tracks the "votes" for the current candidate.
    let count = 0;
    // `candidate` stores the potential majority element.
    let candidate: number | null = null;

    // Iterate through each number in the array.
    for (const num of nums) {
        // If count is 0, it means our previous candidate was "cancelled out".
        // We then nominate the current number as the new candidate.
        if (count === 0) {
            candidate = num;
        }

        // If the current number is the same as our candidate, we increment the count.
        // Otherwise, we decrement it. This is the "voting" or "cancelling" step.
        count += (num === candidate) ? 1 : -1;
    }

    // The algorithm guarantees that the final candidate will be the majority element.
    // The '!' is a non-null assertion, telling TypeScript we are certain `candidate` is not null.
    return candidate!;
};