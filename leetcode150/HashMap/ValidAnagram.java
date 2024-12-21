// 242. Valid Anagram 
// https://leetcode.com/problems/valid-anagram/?envType=study-plan-v2&envId=top-interview-150

/**
 * Problem 242: Valid Anagram
 *
 * Two strings `s` and `t` are anagrams if and only if:
 * 1. Both strings have the same length.
 * 2. Both strings have the same characters with the same frequencies, but the order of characters may be different.
 *
 * Approach:
 * 1. Check if the lengths of `s` and `t` are equal. If they are not, return false because anagrams must have the same length.
 * 2. Use two frequency arrays (`freq1` and `freq2`) of size 26 (since there are 26 lowercase letters) to track the frequency of each character in both strings.
 * 3. Loop through both strings simultaneously:
 *    - For each character in `s`, increment its corresponding count in `freq1`.
 *    - For each character in `t`, increment its corresponding count in `freq2`.
 * 4. Compare both frequency arrays. If they are equal, then the strings are anagrams; otherwise, they are not.
 *
 * Time Complexity: O(n)
 * - `n` is the length of the strings, and we loop through both strings once.
 *
 * Space Complexity: O(1)
 * - The space complexity is constant because the frequency arrays have a fixed size (26) regardless of the input size.
 */


class Solution {
    public boolean isAnagram(String s, String t) {
        // raju arju
        // HashSet<String> hs1 = new HashSet<>();
        // HashSet<String> hs2 = new HashSet<>();

        // int freq1[] = new int[26];
        // for (char ch : s.toCharArray()) {
        //     freq1[ch - 'a']++;
        // }

        // int freq2[] = new int[26];
        // // 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
        // for (char ch : t.toCharArray()) {
        //     freq2[ch - 'a']++;
        // }

        // String freqPattern1 = "";
        // for (int charFreq : freq1) {
        //     freqPattern1 += (charFreq + "");
        // }
        // hs1.add(freqPattern1);
        // System.out.println(hs1);

        // String freqPattern2 = "";
        // for (int charFreq : freq2) {
        //     freqPattern2 += (charFreq + "");
        // }
        // // "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0"
        // hs2.add(freqPattern2);
        // System.out.println(hs2);

        // if (hs1.equals(hs2)) {
        //     return true;
        // }

        // return false;
        
        // Method - 2
        if(s.length()!=t.length()){
            return false;
        }

        int freq1[] = new int[26];
        int freq2[] = new int[26];
        // 0 0 0 0 0 0 0 ......(26) freq1
        // 0 0 0 0 0 0 0 ......(26) freq2

        for(int i = 0; i<s.length(); i++){
            freq1[s.charAt(i)-'a']++;
            freq2[t.charAt(i)-'a']++;
            System.out.println(s.charAt(i)-'a');
        }
        //TC:- O(s)
        //SC:- O(1)
        return Arrays.equals(freq1, freq2);


    }
}
