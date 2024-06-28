package Sorting.leetcode;

//283. Move Zeroes
//Problem Link :- https://leetcode.com/problems/move-zeroes/

class Solution {
    void swap(int[]nums , int start , int end){
        int elem = nums[start];
        nums[start]= nums[end];
        nums[end] = elem;
    }
    public void moveZeroes(int[] nums) {
        /* Using TWO POINTER APPROACH */
//        Time Complexity: O(n)
//        Space Complexity: O(1)
/*        int j=-1;
       for(int i=0;i<nums.length;i++){
           if(nums[i]==0){
               j=i;
               break;
           }
       }
       if(j==-1) return;
       for(int i=j+1;i<nums.length;i++){
           if(nums[i]!=0){
        int temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
               j++;
           }
       } */



        /*USING BUBBLE SORT ALGO. */
//        Time Complexity: O(n^2)
//        Space Complexity: O(1)

       if(nums.length > 1){
           for(int i=0 ; i < nums.length ; i++){
            boolean flag = false;
               
           for(int j = 0 ; j < nums.length-i-1 ; j++){
            
               if(nums[j] == 0 && nums[j+1] != 0){
                   swap(nums,j,j+1);
                   flag=true;
   
               }
           }
           if(!flag){
               return;
           }
       }
       }
        }
    }
