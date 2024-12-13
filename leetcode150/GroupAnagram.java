//49. Group Anagram
// https://leetcode.com/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-interview-150

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
