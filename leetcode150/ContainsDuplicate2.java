//219. Contains Duplicate 2
//https://leetcode.com/problems/contains-duplicate-ii/submissions/1479488806/?envType=study-plan-v2&envId=top-interview-150
class Solution {
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        // 1 2 3 1 --> arr[0] - arr[3] (0-3) <= 3 TRUE
        // 1 0 1 1 --> (2 - 3) <= 1 TRUE
        // 1 2 3 1 2 3 --> (0-3) <= 2 FALSE

        // add elem. to hashtable with indices
        // if we saw the same number twice sub. its indices and validate condition
        // if we get false update it to false until we get true if we get true then
        // return
        // otherwise false

        HashMap<Integer, Integer> map = new HashMap<>();
        
        for (int i = 0; i < nums.length; i++) {

            if (map.containsKey(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) {
                return true;
            }

            map.put(nums[i],i);
        }
                // System.out.println(map);
        return false;
    }
}


