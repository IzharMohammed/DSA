// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/submissions/1479516349/?envType=study-plan-v2&envId=top-interview-150

/**
 * Problem 290: Word Pattern
 *
 * Given a pattern and a string `s`, return true if `s` follows the same pattern as the `pattern` string.
 * Each character in `pattern` must map to a corresponding word in `s`, and each word in `s` must map to a unique character in `pattern`.
 *
 * Approach:
 * 1. Split the input string `s` into individual words by spaces.
 * 2. Check if the number of words in `s` matches the number of characters in the `pattern`. If they don't match, return false.
 * 3. Use two HashMaps:
 *    - `map1` to track mappings from characters in `pattern` to words in `s`.
 *    - `map2` to track mappings from words in `s` to characters in `pattern`.
 * 4. Loop through both the `pattern` and the words in `s`:
 *    - For each character in the pattern, check if it already has a mapping to a word in `map1`. If it does, ensure the mapping is consistent with the current word in `s`. If not, create a new mapping.
 *    - Similarly, for each word in `s`, check if it already has a mapping to a character in `map2`. If it does, ensure the mapping is consistent. Otherwise, create a new mapping.
 * 5. If all mappings are valid, return true; otherwise, return false.
 *
 * Time Complexity: O(n)
 * - `n` is the length of the `pattern` string and the number of words in `s`, as we iterate through both once.
 *
 * Space Complexity: O(n)
 * - We use two HashMaps that store mappings based on the number of unique characters and words in the input.
 */


class Solution {
    public boolean wordPattern(String pattern, String s) {

        HashMap<Character, String> map1 = new HashMap<>();
        HashMap<String, Character> map2 = new HashMap<>();
        String[] str = s.split(" ");

        if (pattern.length() != str.length)
            return false;

        for (int i = 0; i < pattern.length(); i++) {

            char c = pattern.charAt(i);

            if (map1.containsKey(c)) {
                if (!map1.get(c).equals(str[i]))
                    return false;
            } else {
                map1.put(c, str[i]);
            }

            if (map2.containsKey(str[i])) {
                if (map2.get(str[i]) != c)
                    return false;
            } else {
                map2.put(str[i], pattern.charAt(i));
            }

        }
        return true;
    }
}
