package BinarySearch_problems;

class Main {
    static int binarySearch(int[] arr, int target) {
        int start = 0, end = arr.length - 1;
        
        while (start <= end) {
            int mid = start + (end - start) / 2;
            
            if (arr[mid] == target) {
                return mid;
            }
            
            // If mid to end is sorted
            if (arr[mid] <= arr[end]) {
                if (target > arr[mid] && target <= arr[end]) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
            // If start to mid is sorted
            else {
                if (target >= arr[start] && target < arr[mid]) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            }
        }
        
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = { 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8 };
        int target = 12;
        System.out.println(binarySearch(arr, target)); // Output should be 3
    }
}
