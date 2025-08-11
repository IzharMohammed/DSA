/**
 * LeetCode Problem 3: Longest Substring Without Repeating Characters
 * Problem Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * 
 * PROBLEM DESCRIPTION:
 * Given a string s, find the length of the longest substring without duplicate characters.
 * A substring is a contiguous sequence of characters within a string.
 * 
 * THEORY & CONCEPTS:
 * 
 * 1. SLIDING WINDOW TECHNIQUE:
 *    - A two-pointer approach where we maintain a window [left, right]
 *    - Expand the window by moving 'right' pointer
 *    - Contract the window by moving 'left' pointer when constraint is violated
 *    - Used for subarray/substring problems with constraints
 *    - Time efficient: O(n) instead of O(n²) brute force
 * 
 * 2. SET DATA STRUCTURE:
 *    - Stores unique values only (no duplicates)
 *    - O(1) average time for add(), has(), delete() operations
 *    - Perfect for tracking unique characters in current window
 *    - Alternative to using frequency map for this problem
 * 
 * 3. ALGORITHM APPROACH:
 *    - Use sliding window with two pointers: left (start) and right (end)
 *    - Expand window by moving right pointer
 *    - When duplicate found, shrink window from left until duplicate removed
 *    - Track maximum window size encountered
 * 
 * STEP-BY-STEP WALKTHROUGH:
 * Example: s = "abcabcbb"
 * 
 * Step 1: right=0, char='a', set={}, window="a", maxLength=1
 * Step 2: right=1, char='b', set={a}, window="ab", maxLength=2  
 * Step 3: right=2, char='c', set={a,b}, window="abc", maxLength=3
 * Step 4: right=3, char='a', set={a,b,c}, duplicate found!
 *         - Remove s[left=0]='a' from set, left++
 *         - set={b,c}, add 'a', window="bca", maxLength=3
 * Step 5: right=4, char='b', duplicate found!
 *         - Remove s[left=1]='b' from set, left++  
 *         - set={c,a}, add 'b', window="cab", maxLength=3
 * Continue until end...
 */

function lengthOfLongestSubstring(s: string): number {
    // Set to store unique characters in current window
    // Why Set? O(1) lookup, add, delete operations for checking duplicates
    const charSet: Set<string> = new Set();

    // Track the maximum length found so far
    let maxLength = 0;

    // Left pointer of sliding window (start of current substring)
    let left = 0;

    // Right pointer of sliding window (end of current substring)
    // Iterate through each character with right pointer
    for (let right = 0; right < s.length; right++) {

        // WINDOW CONTRACTION: If current character already exists in window
        // We need to shrink window from left until duplicate is removed
        while (charSet.has(s[right])) {
            // Remove leftmost character and move left pointer forward
            charSet.delete(s[left]);
            left++;
        }

        // WINDOW EXPANSION: Add current character to our set
        // At this point, s[right] is guaranteed to be unique in current window
        charSet.add(s[right]);

        // UPDATE MAXIMUM: Calculate current window size and update max if needed
        // Window size = right - left + 1
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

/**
 * TIME COMPLEXITY: O(n)
 * - Each character is visited at most twice (once by right, once by left pointer)
 * - Set operations (has, add, delete) are O(1) on average
 * - Total: O(2n) = O(n)
 * 
 * SPACE COMPLEXITY: O(min(m, n))
 * - m = size of character set (e.g., 128 for ASCII, 26 for lowercase letters)
 * - n = length of string
 * - Set stores at most min(m, n) characters
 * - In worst case: O(n) when all characters are unique
 * - In best case: O(1) when string has only one unique character
 * 
 * EXAMPLES:
 * 1. s = "abcabcbb" → Output: 3 (substring "abc")
 * 2. s = "bbbbb" → Output: 1 (substring "b")  
 * 3. s = "pwwkew" → Output: 3 (substring "wke")
 * 4. s = "" → Output: 0 (empty string)
 * 5. s = "dvdf" → Output: 3 (substring "vdf")
 * 
 * EDGE CASES HANDLED:
 * - Empty string: returns 0
 * - Single character: returns 1
 * - All same characters: returns 1
 * - All unique characters: returns string length
 * - String with repeating pattern: finds longest unique substring
 */