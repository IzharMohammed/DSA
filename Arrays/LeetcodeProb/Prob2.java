// 48. Rotate Image
// Problem link :- https://leetcode.com/problems/rotate-image/description/

class Solution {

    static void swap(int[][]matrix,int i , int j){
        int elem = matrix[i][j];
        matrix[i][j]=matrix[j][i];
        matrix[j][i]=elem;
    }
    
        static void reverse(int[][]matrix,int i){
            int start=0;
            int end=matrix[i].length-1;
            while(start<end){
                int elem = matrix[i][start];
                matrix[i][start]=matrix[i][end];
                matrix[i][end]=elem;
                start++;
                end--;
            }
        }
        
    
        public void rotate(int[][] matrix) {
        //Transpose the matrix 
         for(int i = 0 ; i < matrix.length-1;i++){
            for(int j=i+1 ; j<matrix[0].length;j++){
                swap(matrix,i,j);
            }
        }
    
        //Reverse each row of the matrix    
         for(int i = 0 ; i <matrix.length;i++){
                reverse(matrix,i);
            } 
        }
    }