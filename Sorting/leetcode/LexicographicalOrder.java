package Sorting.leetcode;
import java.util.Arrays;

/* Sort array of string in lexicographical order */

public class LexicographicalOrder {

    public static void main(String[] args) {

        String[] arr = { "papaya", "lime", "watermelon", "apple", "mango", "kiwi" };

        for (int i = 0; i < arr.length; i++) {
            int min_idx = i;
            for (int j = i + 1; j < arr.length; j++) {
                int sign = arr[j].compareTo(arr[min_idx]);
                if (sign < 0) {
                    min_idx = j;
                }
            }
            if (min_idx != i) {
                String temp = arr[min_idx];
                arr[min_idx] = arr[i];
                arr[i] = temp;
            }
        }
        for (String elem : arr) {
            System.out.println(elem);
        }

    }
}