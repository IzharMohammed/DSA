/*
 * 27. Remove Element
 * Problem Link :- https://leetcode.com/problems/remove-element/
 * 
 * Time Complexity :-O(n)
 * Space Complexity:- O(1)
 */

class Solution {

    public int removeElement(int[] nums, int val) {
    //Two pointers 
    int thor=0;
    for(int spiderMan=0;spiderMan<nums.length;spiderMan++){
        if(nums[spiderMan]!=val){
            nums[thor]=nums[spiderMan];
            thor++;
        }
    }
     return thor;
    }
}