//49. Group Anagram
// https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * Problem 49: Group Anagrams
 *
 * Given an array of strings `strs`, group the anagrams together. An anagram is a word or phrase that contains the same 
 * letters, but in a different order.
 * 
 * Approach:
 * 1. Use a HashMap to group strings based on their frequency pattern.
 * 2. For each string in the input:
 *    - Calculate its frequency pattern (the frequency of each letter).
 *    - Convert the frequency pattern into a unique string (this will be the key in the HashMap).
 *    - If the pattern already exists as a key in the map, add the string to the corresponding list.
 *    - If not, create a new list for that pattern.
 * 3. Once all strings are processed, return the grouped anagrams as a list of lists.
 * 
 * Time Complexity: O(n * m)
 * - `n` is the number of strings in the input array, and `m` is the maximum length of a string. 
 * - For each string, we iterate through its characters and perform constant-time operations for each character.
 *
 * Space Complexity: O(n * m)
 * - The space complexity is determined by the size of the HashMap and the number of anagram groups.
 * - The space required to store all the strings is O(n * m), where `n` is the number of strings and `m` is the average length of the strings.
 */

import java.util.*;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // Create a HashMap to group strings by their frequency pattern
        Map<String, List<String>> map = new HashMap<>();

        // Loop through each string in the input array
        for (String str : strs) {
            // Step 1: Calculate the frequency pattern of the string
            int freq[] = new int[26]; // Array to store frequency of each letter (a-z)
            for (char ch : str.toCharArray()) { // Convert string to char array and iterate
                freq[ch - 'a']++; // Increment the count for the character
            }

            // Step 2: Generate a unique string from the frequency array
            String freqPattern = ""; // To store the frequency pattern as a string
            for (int charFreq : freq) { // Convert the frequency array to a string
                freqPattern += (charFreq + ""); // Append frequency to the string
            }

            // Step 3: Check if the frequency pattern is already in the map
            if (!map.containsKey(freqPattern)) {
                // If not present, add a new key with an empty list
                map.put(freqPattern, new ArrayList<>());
            }

            // Step 4: Add the current string to the list corresponding to its pattern
            map.get(freqPattern).add(str);
        }

        // Step 5: Return all the grouped anagrams as a list of lists
        return new ArrayList<>(map.values());
    }
}
