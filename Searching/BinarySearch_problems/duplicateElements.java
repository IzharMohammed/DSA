package BinarySearch_problems;

class Main {
    static boolean binarySearch(int[] arr, int target) {
        int start = 0, end = arr.length - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] == target)
                return true;
            if (arr[start] == arr[mid] && arr[mid] == arr[end]) {
                start++;
                end--;
            } else {
                if (arr[mid] <= arr[end]) {   // If mid to end is sorted
                    if (arr[mid] < target && target < arr[end]) {
                        start = mid + 1;
                    } else {
                        end = mid - 1;
                    }
                } else {  // If start to mid is sorted
                    if (arr[start] < target && target > arr[mid]) {
                        end = mid - 1;
                    } else {
                        start = mid + 1;
                    }
                }
            }

        }
        return false;
    }

    public static void main(String[] args) {
        int[] arr = { 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, };
        int target = 3;
        System.out.println(binarySearch(arr, target));
    }
}
