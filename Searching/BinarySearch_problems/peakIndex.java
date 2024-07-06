package BinarySearch_problems;

// 852. Peak Index in a Mountain Array
// Problem link :- https://leetcode.com/problems/peak-index-in-a-mountain-array/


class Solution {
    public int peakIndexInMountainArray(int[] arr) {

        /* Method -1 */
        /*
         * int start = 0, end = arr.length - 1;
         * while (start <= end) {
         * int mid = start + (end - start) / 2;
         * if (mid == 0) mid += 1;
         * 
         * if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
         * return mid;
         * }
         * 
         * if (arr[mid] < arr[mid + 1]) {
         * start = mid + 1;
         * } else if (arr[mid - 1] > arr[mid]) {
         * end = mid - 1;
         * }
         * }
         * return -1;
         */

        /* Method - 2 */
        int start = 0, end = arr.length - 1;
        int ans = -1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] < arr[mid + 1]) {
                ans = mid + 1;
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return ans;

    }
}