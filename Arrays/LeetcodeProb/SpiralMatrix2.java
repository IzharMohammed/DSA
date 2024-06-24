//59. Spiral Matrix II
//Problem Link :- https://leetcode.com/problems/spiral-matrix-ii/
//Time Complexity :-O(n*2)
//space Complexity :- O(n*2)

class Solution {
    public int[][] generateMatrix(int n) {
        int arr[][]=new int[n][n];
        int topRow = 0 , bottomRow=n-1;
        int leftCol = 0 , rightCol = n-1,total=0,count=1;

        while(count<=n*n){
            for(int j=leftCol;j<=rightCol;j++){
                arr[topRow][j]=count;
                count++;
            }
            topRow++;

        for(int i=topRow;i<=bottomRow;i++){
            arr[i][rightCol]=count;
            count++;
        }
        rightCol--;

        for(int j=rightCol;j>=leftCol;j--){
            arr[bottomRow][j]=count;
            count++;
        }
        bottomRow--;

        for(int i=bottomRow;i>=topRow;i--){
            arr[i][leftCol]=count;
            count++;
        }

        leftCol++;
        }

        return arr;

    }
}