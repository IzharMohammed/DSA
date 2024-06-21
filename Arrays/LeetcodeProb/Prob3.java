// 118. Pascal's Triangle
// Problem Link :- https://leetcode.com/problems/pascals-triangle/
// Time complexity: O(n^2)
//  Space complexity: O(n^2)

import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<List<Integer>> generate(int numRows) {

        List<List<Integer>> ans = new ArrayList<>();

        for(int i=0;i<numRows;i++){

        List<Integer> list=new ArrayList<>();

        for(int j=0;j<=i;j++){
            if(j==0||i==j){
                list.add(1);
             }else{
                 list.add(ans.get(i-1).get(j-1)+ans.get(i-1).get(j));
                  
              }
          }

            ans.add(list);
        }
        return ans;
    }
}