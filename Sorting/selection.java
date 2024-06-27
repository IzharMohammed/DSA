
class Solution {
    void selectionSort(int arr[], int n) {
        for (int i = 0; i < arr.length; i++) {

            int min_idx = i;

            for (int j = i + 1; j < arr.length; j++) {
                if (arr[min_idx] > arr[j]) {
                    min_idx = j;
                }
            }

            if (min_idx != i) {
                int elem = arr[min_idx];
                arr[min_idx] = arr[i];
                arr[i] = elem;

            }
        }
    }
}