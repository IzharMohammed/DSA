// 242. Valid Anagram 
// https://leetcode.com/problems/valid-anagram/?envType=study-plan-v2&envId=top-interview-150

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