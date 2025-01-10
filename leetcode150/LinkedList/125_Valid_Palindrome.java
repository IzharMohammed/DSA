/**
 * Problem: 125. Valid Palindrome
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters
 * and removing all non-alphanumeric characters, it reads the same forward and backward.
 * Alphanumeric characters include letters and numbers.
 *
 * Example 1:
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 *
 * Example 2:
 * Input: s = "race a car"
 * Output: false
 * Explanation: "raceacar" is not a palindrome.
 *
 * Example 3:
 * Input: s = " "
 * Output: true
 * Explanation: s is an empty string "" after removing non-alphanumeric characters.
 * Since an empty string reads the same forward and backward, it is a palindrome.
 */

/*
Approach M-1:
1. Replace all non-alphanumeric characters using `replaceAll` with regex "[^a-zA-Z0-9]".
2. Convert the string to lowercase using `toLowerCase`.
3. Use two pointers (`left` and `right`) to compare characters from both ends of the string.
4. Increment `left` and decrement `right` if characters match; otherwise, return false.
5. If pointers meet or cross without mismatches, return true.

Time Complexity: O(n) - One pass for replaceAll, one pass for toLowerCase, and one for the while loop.
Space Complexity: O(n) - Intermediate strings created by replaceAll and toLowerCase.
*/

// class Solution {
//     public boolean isPalindrome(String s) {
//         // Remove all non-alphanumeric characters
//         s = s.replaceAll("[^a-zA-Z0-9]", "");

//         // Convert to lowercase
//         s = s.toLowerCase();

//         // Initialize two pointers
//         int left = 0;
//         int right = s.length() - 1;

//         // Compare characters from both ends
//         while (left < right) {
//             if (s.charAt(left) == s.charAt(right)) {
//                 left++;
//                 right--;
//             } else {
//                 return false;
//             }
//         }

//         // If no mismatches, return true
//         return true;
//     }
// }

/*
Approach M-2:
1. Use two pointers (`left` and `right`) to traverse the string.
2. Skip non-alphanumeric characters using `Character.isLetterOrDigit`.
3. Compare characters at the `left` and `right` pointers in a case-insensitive manner using `Character.toLowerCase`.
4. Increment `left` and decrement `right` if characters match; otherwise, return false.
5. If pointers meet or cross without mismatches, return true.

Time Complexity: O(n) - Single pass of the string with two pointers.
Space Complexity: O(1) - No additional memory is used beyond a few variables.
*/

class Solution {
    public boolean isPalindrome(String s) {
        // Initialize two pointers
        int left = 0;
        int right = s.length() - 1;

        while (left < right) {
            // Move left pointer to the next alphanumeric character
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
                left++;
            }

            // Move right pointer to the previous alphanumeric character
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
                right--;
            }

            // Compare characters in a case-insensitive manner
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right))) {
                return false;
            }

            // Move pointers closer
            left++;
            right--;
        }

        // If no mismatches, return true
        return true;
    }
}

