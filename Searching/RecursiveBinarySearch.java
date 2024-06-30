public class RecursiveBinarySearch {

    static boolean recBinarySearch(int[] arr, int start, int end, int target) {
        if (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] == target) {
                return true;
            } else if (arr[mid] > target) {
                return recBinarySearch(arr, start, mid - 1, target);
            } else {
                return recBinarySearch(arr, mid + 1, end, target);
            }
        }
        return false;
    }

    public static void main(String[] args) {

        int[] arr = { 1, 2, 3, 4, 5, 10 };
        System.out.println(recBinarySearch(arr, 0, arr.length - 1, 1));
    }
}
