// 80. Remove Duplicates from Sorted Array II
// Link :- https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
//Time Complexity :- O(n)
//Space Compl;exity :- O(1)

class Solution {
    public int removeDuplicates(int[] nums) {
        //Two pointer approach 
        //first pointer is i
        //second pointer is index
        int val=nums[0];
        int count =0;
        int index=0;
        for(int i=0;i<nums.length;i++){
 //Add count if there is similar value else add new value 
            if(val==nums[i]){
            count++;
            }else{
            val=nums[i];
            count=1;
            }
//if the count is less than 2 then move index otherwise dont increase index value
            if(count<=2){
                nums[index]=nums[i];
                index++;
            }
        }
        return index;

    }
}