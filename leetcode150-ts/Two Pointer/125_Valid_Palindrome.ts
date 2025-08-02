/*
LeetCode 125. Valid Palindrome
Link: https://leetcode.com/problems/valid-palindrome/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, it reads the same forward and backward.
*/

/**
 * Checks if a string is a valid palindrome after removing non-alphanumeric characters.
 * @param s - The input string to check
 * @returns boolean - True if the string is a palindrome, false otherwise
 */
function isPalindrome(s: string): boolean {
    // Step 1: Normalize the string
    // - Remove all non-alphanumeric characters using regex
    // - Convert to lowercase for case-insensitive comparison
    s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Initialize two pointers:
    // - 'left' starts at the beginning of the string
    // - 'right' starts at the end of the string
    let left = 0;
    let right = s.length - 1;

    // Step 2: Check characters from both ends moving towards the center
    while (left < right) {
        // Compare characters at left and right pointers
        // - Increment left pointer if characters match
        // - Decrement right pointer if characters match
        // - Return false immediately if mismatch found
        if (s[left++] !== s[right--]) {
            return false;
        }
    }

    // If all character pairs matched, return true (valid palindrome)
    return true;
};

/*
================================================================================
THEORY & APPROACH EXPLANATION
================================================================================

1. PROBLEM UNDERSTANDING:
   - A palindrome reads the same forwards and backwards when considering only alphanumeric chars
   - We must ignore case and all non-alphanumeric characters
   - Examples:
     - "A man, a plan, a canal: Panama" → true ("amanaplanacanalpanama")
     - "race a car" → false ("raceacar")

2. KEY INSIGHTS:
   - The solution requires two main operations:
     a. String normalization (remove non-alphanumeric, lowercase)
     b. Palindrome verification

3. SOLUTION APPROACH:
   a. Normalization Phase:
      - Use regex to remove non-alphanumeric characters
      - Convert to lowercase for case-insensitive comparison
   b. Verification Phase:
      - Use two-pointer technique:
        - One pointer starts at beginning
        - One pointer starts at end
      - Compare characters while moving pointers towards center
      - If any mismatch found → not palindrome
      - If pointers meet/cross → valid palindrome

4. COMPLEXITY ANALYSIS:
   - Time Complexity: O(n)
     - replace(): O(n) for string scan
     - toLowerCase(): O(n)
     - Two-pointer check: O(n/2) → O(n)
   - Space Complexity: O(1)
     - Only uses pointers and creates one new string
     - No additional data structures used

5. EDGE CASES HANDLED:
   - Empty string → returns true (considered palindrome)
   - String with no alphanumeric chars → empty string → true
   - String with all same characters → returns true
   - Odd-length palindromes → middle character doesn't need match
*/

/*
================================================================================
TEST CASES
================================================================================
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                    // false
console.log(isPalindrome(" "));                             // true
console.log(isPalindrome("No 'x' in Nixon"));               // true
console.log(isPalindrome("0P"));                            // false
*/