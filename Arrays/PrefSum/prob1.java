// 2587. Rearrange Array to Maximize Prefix Score
//Prob Link :- https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/
import java.util.Arrays;

class Solution {
    public int maxScore(int[] nums) {
        //sort
   Arrays.sort(nums);
   //Reverse
   int i =0;
   int j = nums.length-1;
    while(i<j){
        int elem=nums[i];
        nums[i]=nums[j];
        nums[j]=elem;
        i++;
        j--;
    }
    //prefix sum
  long []pref= new long[nums.length];
  pref[0]= nums[0];

    for(int k =1;k<pref.length;k++){
        pref[k]=pref[k-1]+nums[k];
    }

   int ans=0;
//Returning the max. score
for(int l = 0 ; l < pref.length;l++){
    if(pref[l]>0){
        ans++;
    }
}
return ans;

    }
}