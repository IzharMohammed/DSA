// 205. IsoMorphihc Strings
// https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
	
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

