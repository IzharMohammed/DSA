//383 Ransom Note
// https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150

/*
Approach for Solving the Problem
To determine if the ransomNote can be constructed from the magazine, follow these steps:

1. Understand the Problem
Each character in magazine can only be used once to construct ransomNote.
If ransomNote contains a character that is not present in magazine or is present in insufficient quantity, return false.
2. Key Insight
The solution revolves around counting the occurrences of each character in both strings and ensuring that the count of each character in ransomNote is less than or equal to its count in magazine.
3. Steps
Count Character Frequencies:

Create a way to count how many times each character appears in magazine (e.g., using an array for ASCII lowercase characters or a hashmap for flexibility).
Validate Ransom Note Characters:

Iterate through the characters of ransomNote.
For each character:
Check if it exists in the frequency count from magazine.
Ensure there are enough occurrences of the character to match ransomNote.
Early Exit:

If at any point a character in ransomNote is not found in magazine or the count is insufficient, return false.
Return True:

If the iteration completes successfully, return true as all characters in ransomNote are accounted for.

 */

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        // aa aab (true)
        // 2... , 2 1...
        // aa ab (false)
        // 2... , 1 1....
        int freq1[] = new int[26];
        int freq2[] = new int[26];
        // [0 0 0 0 0 0 0 0 0 0 0.....]
        // [0 0 0 0 0 0 0 0 0 0 0.....]

        for (int i = 0; i < ransomNote.length(); i++) {
            freq1[ransomNote.charAt(i) - 'a']++;
        }

        for (int i = 0; i < magazine.length(); i++) {
            freq2[magazine.charAt(i) - 'a']++;
        }

        // Method - 1
        // for(int i=0; i <freq1.length;i++){
        // System.out.println(freq1[i]!=freq2[i]);

        // if(freq1[i] > freq2[i]){
        // return false;
        // }
        // }

        // Method - 2
        for (char ch : ransomNote.toCharArray()) {
            int index = ch - 'a';
            freq2[index]--;
            if (freq2[index] < 0) {
                return false;
            }
        }
        return true;
    }
}