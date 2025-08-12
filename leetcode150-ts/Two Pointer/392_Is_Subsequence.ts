/**
 * LeetCode Problem 392: Is Subsequence
 * Problem Link: https://leetcode.com/problems/is-subsequence/
 * 
 * PROBLEM DESCRIPTION:
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string formed from the original string by deleting
 * some (can be none) characters without disturbing the relative positions of remaining characters.
 * (i.e., "ace" is a subsequence of "abcde" while "aec" is not)
 * 
 * THEORY & CONCEPTS:
 * 
 * 1. SUBSEQUENCE DEFINITION:
 *    - A subsequence maintains the relative order of characters
 *    - Characters can be non-contiguous (unlike substring)
 *    - We can skip characters in the target string but not reorder them
 *    - Examples: "ace" from "abcde" ✓, "aec" from "abcde" ✗ (wrong order)
 * 
 * 2. TWO-POINTER TECHNIQUE:
 *    - NOT a sliding window (no expanding/contracting window)
 *    - Uses one pointer for source string (s), implicit iteration for target (t)
 *    - Greedy approach: match characters as soon as possible
 *    - Linear scan through target string, advancing source pointer on matches
 * 
 * 3. GREEDY ALGORITHM:
 *    - Always take the first available match in target string
 *    - This works because we only care about order preservation, not optimization
 *    - If we can match greedily, any other matching strategy will also work
 *    - No need to consider multiple possibilities or backtracking
 * 
 * 4. WHY NOT SLIDING WINDOW?
 *    - Sliding window involves expanding and contracting a window
 *    - Here we have a simple linear scan with conditional advancement
 *    - No window size constraints or optimization of window properties
 *    - More accurately described as "two-pointer" or "linear matching"
 * 
 * ALGORITHM WALKTHROUGH:
 * Example 1: s = "abc", t = "ahbgdc"
 * 
 * Initial: sPointer = 0, looking for s[0] = 'a'
 * 
 * Step 1: t[0] = 'a', matches s[0] = 'a' ✓
 *         sPointer = 1, now looking for s[1] = 'b'
 * Step 2: t[1] = 'h', doesn't match s[1] = 'b', continue
 * Step 3: t[2] = 'b', matches s[1] = 'b' ✓
 *         sPointer = 2, now looking for s[2] = 'c'
 * Step 4: t[3] = 'g', doesn't match s[2] = 'c', continue
 * Step 5: t[4] = 'd', doesn't match s[2] = 'c', continue  
 * Step 6: t[5] = 'c', matches s[2] = 'c' ✓
 *         sPointer = 3, equals s.length
 * 
 * Result: sPointer === s.length (3), return true
 * 
 * Example 2: s = "axc", t = "ahbgdc"
 * 
 * Initial: sPointer = 0, looking for s[0] = 'a'
 * 
 * Step 1: t[0] = 'a', matches s[0] = 'a' ✓
 *         sPointer = 1, now looking for s[1] = 'x'
 * Step 2: t[1] = 'h', doesn't match s[1] = 'x', continue
 * Step 3: t[2] = 'b', doesn't match s[1] = 'x', continue
 * Step 4: t[3] = 'g', doesn't match s[1] = 'x', continue
 * Step 5: t[4] = 'd', doesn't match s[1] = 'x', continue
 * Step 6: t[5] = 'c', doesn't match s[1] = 'x', continue
 * 
 * End of t: sPointer = 1, not equal to s.length (3), return false
 */

function isSubsequence(s: string, t: string): boolean {
    // Pointer for string s - tracks which character we're looking for next
    // This acts as an index into string s, advancing only on successful matches
    let sPointer = 0;

    // Iterate through every character in target string t
    // We use for...of loop which gives us each character directly
    for (const char of t) {
        // EARLY TERMINATION OPTIMIZATION:
        // If we've matched all characters in s, no need to continue
        // This is an optimization that can save unnecessary iterations
        if (sPointer === s.length) break;

        // CHARACTER MATCHING:
        // Check if current character in t matches the character we're looking for in s
        // Only advance sPointer when we find a match (greedy matching)
        if (char === s[sPointer]) sPointer++;

        // If no match, we simply continue to next character in t
        // This effectively "skips" the current character in t
    }

    // FINAL VALIDATION:
    // Return true if we successfully matched all characters in s
    // sPointer should equal s.length if we found all characters in order
    return sPointer === s.length;
}

/**
 * TIME COMPLEXITY: O(n)
 * - n = length of string t (target string)
 * - We iterate through string t exactly once
 * - Each character comparison is O(1)
 * - Early termination when sPointer === s.length doesn't change worst-case
 * - Independent of string s length (since s.length <= 100, it's effectively constant)
 * 
 * SPACE COMPLEXITY: O(1)
 * - Only using a single pointer variable (sPointer)
 * - No additional data structures that scale with input size
 * - for...of loop doesn't create additional space (just iterates)
 * - Constant extra space regardless of input size
 * 
 * WHY THIS APPROACH IS OPTIMAL:
 * - We must examine each character in t at least once: Ω(n)
 * - We examine each character in t at most once: O(n)
 * - Therefore, this is optimal: Θ(n)
 * - Space is minimal - can't do better than O(1)
 * 
 * EXAMPLES:
 * 1. s = "abc", t = "ahbgdc" → Output: true
 *    Matches: a(0)→a(0), b(1)→b(2), c(2)→c(5)
 * 
 * 2. s = "axc", t = "ahbgdc" → Output: false  
 *    Matches: a(0)→a(0), x(1)→not found
 * 
 * 3. s = "", t = "anything" → Output: true (empty string is subsequence of any string)
 * 
 * 4. s = "abc", t = "abc" → Output: true (identical strings)
 * 
 * 5. s = "abc", t = "cba" → Output: false (wrong order)
 * 
 * EDGE CASES HANDLED:
 * - Empty source string s: returns true immediately
 * - Empty target string t: returns true only if s is also empty
 * - s longer than t: will return false (impossible to be subsequence)
 * - Identical strings: returns true
 * - No matches found: returns false
 * - Partial matches: returns false unless all characters matched
 * 
 * KEY INSIGHTS:
 * 1. Greedy matching works because order must be preserved
 * 2. We don't need to consider multiple matching possibilities  
 * 3. First valid match is always optimal for subsequence problems
 * 4. Two-pointer technique is perfect for sequential matching problems
 * 5. Early termination improves average-case performance
 * 
 * ALTERNATIVE APPROACHES:
 * 1. Recursive with memoization: O(n*m) time, O(n*m) space - overkill
 * 2. Dynamic Programming: O(n*m) time, O(n*m) space - unnecessary complexity
 * 3. Two explicit pointers: O(n) time, O(1) space - equivalent approach
 * 4. This greedy approach: O(n) time, O(1) space - optimal
 * 
 * WHEN TO USE THIS PATTERN:
 * - Subsequence/substring matching problems
 * - Sequential pattern matching in streams
 * - Order-preserving filtering operations
 * - Template matching in text processing
 */