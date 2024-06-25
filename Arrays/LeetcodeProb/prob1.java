// 867. Transpose Matrix
// Problem link :- https://leetcode.com/problems/transpose-matrix/description/
// Time complexity :-O(n×m) n=no of rows , m = no. of columns
//Space complexity :- O(n×m)

class prob1 {
    public int[][] transpose(int[][] matrix) {
        

        int[][]ans = new int[matrix[0].length][matrix.length];

        for(int i = 0 ; i < matrix[0].length;i++){
            for(int j = 0 ; j < matrix.length;j++){
                ans[i][j]=matrix[j][i];
            }
        }

        return ans;
    }
}