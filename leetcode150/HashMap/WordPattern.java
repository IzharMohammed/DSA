// 290. Word Pattern
// https://leetcode.com/problems/word-pattern/submissions/1479516349/?envType=study-plan-v2&envId=top-interview-150

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
