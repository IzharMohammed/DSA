package BinarySearch_problems;

// 240. Search a 2D Matrix II
// Problem link :- https://leetcode.com/problems/search-a-2d-matrix-ii/

class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int row=0 , col = matrix[0].length - 1;
        while (row < matrix.length && col >=0) {
        int element = matrix[row][col];
            if(element == target) return true;
            if (element < target) {
                row++;
            } else {
               col--;
            }
        }
        return false;

    }
}