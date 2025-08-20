/**
 * 205. Isomorphic Strings
 * 
 * Problem Link: https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
 * 
 * Given two strings s and t, determine if they are isomorphic.
 * Two strings s and t are isomorphic if the characters in s can be replaced to get t.
 * 
 * Constraints:
 * - All occurrences of a character must be replaced with another character while preserving order
 * - No two characters may map to the same character (injective mapping)
 * - A character may map to itself
 * 
 * Example 1:
 * Input: s = "egg", t = "add"
 * Output: true
 * Explanation: e→a, g→d
 * 
 * Example 2:
 * Input: s = "foo", t = "bar"
 * Output: false
 * Explanation: 'o' would need to map to both 'a' and 'r'
 * 
 * Example 3:
 * Input: s = "paper", t = "title"
 * Output: true
 * Explanation: p→t, a→i, e→l, r→e
 */

/**
 * Determines if two strings are isomorphic
 * 
 * Approach:
 * We use two hash maps to maintain bidirectional mapping between characters:
 * 1. sMap: Maps characters from string s to string t
 * 2. tMap: Maps characters from string t to string s
 * 
 * For each character pair (sChar, tChar) at the same position:
 * - If sChar already maps to a different tChar → return false
 * - If tChar already maps to a different sChar → return false
 * - Otherwise, establish the bidirectional mapping
 * 
 * Concept:
 * This is a classic example of using hash maps for character mapping validation.
 * The bidirectional mapping ensures both injective (one-to-one) and functional mapping.
 * 
 * Time Complexity: O(n) where n is the length of the strings
 * Space Complexity: O(1) since the maps can store at most 256 characters (ASCII range)
 *                  but technically O(k) where k is the character set size
 * 
 * Real-world Applications:
 * - Pattern matching in text processing
 * - Data encryption/decryption algorithms
 * - Bioinformatics (DNA/RNA sequence analysis)
 * - File comparison and diff tools
 */

function isIsomorphic(s: string, t: string): boolean {
    // Two maps for bidirectional character mapping
    const sMap = new Map<string, string>(); // Maps s characters to t characters
    const tMap = new Map<string, string>(); // Maps t characters to s characters

    // Early return if strings have different lengths
    if (s.length !== t.length) return false;

    // Iterate through each character position
    for (let i = 0; i < s.length; i++) {
        const sChar = s[i]; // Current character in string s
        const tChar = t[i]; // Current character in string t

        // Check for mapping conflicts in both directions
        if (
            // If sChar already maps to a different tChar
            (sMap.has(sChar) && sMap.get(sChar) !== tChar) ||
            // If tChar already maps to a different sChar
            (tMap.has(tChar) && tMap.get(tChar) !== sChar)
        ) {
            return false; // Mapping conflict found
        }

        // Establish the bidirectional mapping
        sMap.set(sChar, tChar); // sChar → tChar
        tMap.set(tChar, sChar); // tChar → sChar
    }

    return true; // All characters mapped successfully
}

// Test cases
console.log(isIsomorphic("egg", "add"));    // true: e→a, g→d
console.log(isIsomorphic("foo", "bar"));    // false: o would need to map to both a and r
console.log(isIsomorphic("paper", "title"));// true: p→t, a→i, e→l, r→e
console.log(isIsomorphic("badc", "baba"));  // false: b→b, a→a, d→b (conflict: b and d both map to b)
console.log(isIsomorphic("a", "a"));        // true: a→a
console.log(isIsomorphic("a", "b"));        // true: a→b
console.log(isIsomorphic("ab", "aa"));      // false: a→a, b→a (conflict: a and b both map to a)

/**
 * Alternative Approaches:
 * 1. Using two arrays (for ASCII characters only): More memory efficient for limited character sets
 * 2. Using index mapping: Track first occurrence positions of characters
 * 3. Using single map with value checking: More complex but uses less space
 * 
 * Why this approach is optimal:
 * - Handles any Unicode characters (not just ASCII)
 * - Clear and readable logic
 * - Early termination on first conflict
 * - Maintains both forward and reverse mapping constraints
 */

