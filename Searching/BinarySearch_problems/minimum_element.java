package BinarySearch_problems;
/*
  A rotated sorted array on which rotation operation has been performed some number of times .
  Given a rotated sorted array , find the index of minimum element in the array .
  it is guaranteed that elements in array are unque

  I/P :- [3,4,5,1,2]
  O/P :- 3
  */

public class minimum_element {
    static int binarySearch(int[] arr) {
        int start = 0, end = arr.length - 1, lastElement = arr[end];
        int ans = -1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] > lastElement) {
                start = mid + 1;
            } else if (arr[mid] <= lastElement) {
                ans = mid;
                end = mid - 1;
            }
        }
        return ans;
    }

    public static void main(String[] args) {
        int[] arr = { 5, 6, 7, 8, 9, 1, 2, 3, 4 };

        System.out.println(binarySearch(arr));
    }
}
