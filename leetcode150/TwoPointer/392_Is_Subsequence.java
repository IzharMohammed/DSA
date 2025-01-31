/**
 * 392. Is Subsequence
 * 
 * Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
 * A subsequence of a string is a new string that is formed from the original string
 * by deleting some (can be none) of the characters without disturbing the relative positions
 * of the remaining characters.
 * 
 * Approach:
 * - We use a two-pointer technique where we iterate through `t` while checking characters of `s`.
 * - Maintain a pointer `j` to track our position in `s`.
 * - Iterate through `t` using `i`, and whenever `t[i]` matches `s[j]`, move `j` forward.
 * - If `j` reaches the length of `s`, it means all characters of `s` were found in `t` in order,
 *   so we return `true`. Otherwise, return `false`.
 * 
 * Complexity Analysis:
 * - Time Complexity: O(n), where `n` is the length of `t`.
 *   - We iterate through `t` at most once.
 * - Space Complexity: O(1), since we use only two integer variables (`i` and `j`).
 */

class Solution {
    public boolean isSubsequence(String s, String t) {
        // Initialize a pointer `j` to track position in `s`
        int j = 0;
        
        // If `s` is empty, it's always a subsequence
        if (s.length() == 0)  return true;
        
        // If `s` is longer than `t`, it can't be a subsequence
        if (s.length() > t.length()) return false;

        // Iterate through `t` while `j` is within `s`
        for (int i = 0; i < t.length() && j < s.length(); i++) {
            // If characters match, move `j` to check the next character in `s`
            if (t.charAt(i) == s.charAt(j)) {
                j++;
            }
        }
        
        // If `j` reaches the length of `s`, it means `s` is found in `t`
        return j == s.length();
    }
}

