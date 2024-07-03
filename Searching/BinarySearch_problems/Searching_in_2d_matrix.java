package BinarySearch_problems;

//74. Search a 2D Matrix
//link :- https://leetcode.com/problems/search-a-2d-matrix/

class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {

        int row = matrix.length, col = matrix[0].length;
        int start = 0, end = row * col - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            // finding the element using formula
            // row no = mid/col
            // col no = mid%col
            int midEle = matrix[mid / col][mid % col];
            if (midEle == target)
                return true;
            if (midEle < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return false;

    }
}