/*54. Spiral Matrix
problem link :- https://leetcode.com/problems/spiral-matrix/
Time Complexity :- O(r*c)
Space  Complexity :- O(r*c)
*/

import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer>list = new ArrayList<>();
    int topRow=0,leftCol=0 ,bottomRow=matrix.length-1 ,rightCol=matrix[0].length-1 ;
    int totalElem=0;
    int r=matrix.length,c=matrix[0].length;
    while(totalElem < r*c ){
        //TopRow = leftcol to rightCol
        for(int j=leftCol;j<=rightCol&& totalElem < r*c ;j++){
            list.add(matrix[topRow][j]);
            totalElem++;
        }
        topRow++;
        //rightCol = topRow to bottomRow
        for(int i=topRow;i<=bottomRow && totalElem < r*c ;i++){
           list.add(matrix[i][rightCol]);
            totalElem++;
        }
        rightCol--;

        //bottomRow = rightCol to leftCol
        for(int j=rightCol;j>=leftCol && totalElem < r*c ;j--){
            list.add(matrix[bottomRow][j]);
            totalElem++;
        }
        bottomRow--;
        //leftCol = bottomRow to topRow
        for(int i=bottomRow;i>=topRow && totalElem < r*c ;i--){
            list.add(matrix[i][leftCol]);
             totalElem++;
        }
        leftCol++;

    }
    return list;
   
    }

    }
