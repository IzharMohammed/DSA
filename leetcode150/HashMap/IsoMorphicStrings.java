// 205. IsoMorphihc Strings
// https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150

/**
 * Problem 205: Isomorphic Strings
 *
 * Two strings `s` and `t` are called isomorphic if there is a one-to-one mapping between the characters of `s` and `t`.
 * Specifically, each character in `s` must map to exactly one character in `t`, and vice versa.
 *
 * Approach:
 * 1. Check if the lengths of the two strings are equal. If not, they cannot be isomorphic, so return false.
 * 2. Use two HashMaps to track the character mappings:
 *    - The first map (`map1`) stores mappings from characters in `s` to characters in `t`.
 *    - The second map (`map2`) stores mappings from characters in `t` to characters in `s`.
 * 3. Loop through the characters of both strings simultaneously. For each pair of characters:
 *    - If the character from `s` is already mapped, check if it matches the current character in `t`. If not, return false.
 *    - Similarly, check if the character from `t` is already mapped to the current character in `s`. If not, return false.
 * 4. If no mismatches are found, return true.
 *
 * Time Complexity: O(n)
 * - `n` is the length of the strings, and we loop through both strings once.
 *
 * Space Complexity: O(n)
 * - We use two HashMaps to store mappings, where `n` is the number of unique characters in the strings.
 *

class Solution {
    public boolean isIsomorphic(String s, String t) {
        // egg add
        //


        // ab --> a -> a b -> a
        // aa

        if(s.length()!=t.length()) return false;

        HashMap<Character,Character> map1 = new HashMap<>();
        HashMap<Character,Character> map2 = new HashMap<>();

        for(int i = 0 ; i < s.length(); i++){

            char ch1 = s.charAt(i);
            char ch2 = t.charAt(i);
            // paper --> p -> t a -> i e -> l r -> e
            // title

            // badc --> b->b a->a
            // baba

            if(map1.containsKey(ch1)){
                if(map1.get(ch1)!=ch2) return false;
            }else{
                map1.put(ch1, ch2);
            }

            if(map2.containsKey(ch2)){
                if(map2.get(ch2)!=ch1) return false;
            }else{
                map2.put(ch2, ch1);

            }

        }
            return true;
    }
}

