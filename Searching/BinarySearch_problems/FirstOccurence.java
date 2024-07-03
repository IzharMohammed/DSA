package BinarySearch_problems;

/*
Q) Find first occurence of given element x , given array is SORTED , if no occurence of x is found then
  return -1

  Approach :- using binary search but when we get the ans if mid value is equal to target then we do not 
  return instead modify ans variable to mid and move end to mid-1 (left side)
 */

public class FirstOccurence {

    static int binarySearch(int[] arr, int start, int end, int target) {
        int ans = -1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] == target) {
                ans = mid;
                end = mid - 1;
            } else if (arr[mid] > target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return ans;

    }

    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6 };
        int target = 50;
        System.out.println(binarySearch(arr, 0, arr.length - 1, target));
    }
}