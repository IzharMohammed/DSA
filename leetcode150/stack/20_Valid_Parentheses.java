/**
 * Problem: Longest Valid Parentheses
 * 
 * Given a string containing just the characters '(' and ')', 
 * return the length of the longest valid (well-formed) parentheses substring.
 * 
 * Detailed Approach:
 * 1. Use a stack to help track indices of characters in the string.
 *    - The stack is initialized with a placeholder index (-1) to handle cases where a valid substring starts from the very beginning.
 * 
 * 2. Traverse the string character by character:
 *    - If the character is '(': 
 *      - Push its index onto the stack. 
 *      - This marks the potential start of a valid substring if matched later by a ')'.
 *    - If the character is ')':
 *      - Pop the top of the stack to attempt matching it with a previous '('.
 *      - After popping:
 *          * If the stack becomes empty, it means there was no matching '(' for the current ')'.
 *            Push the current index of ')' onto the stack as a new boundary.
 *          * If the stack is not empty, calculate the length of the valid substring:
 *            - Subtract the index at the top of the stack (which represents the last unmatched character before the valid substring) from the current index.
 *            - Update `maxLength` if this new length is greater than the current `maxLength`.
 * 
 * 3. Continue this process for every character in the string.
 *    - By the end of the traversal, `maxLength` will contain the length of the longest valid parentheses substring.
 * 
 * Key Insight:
 * - The stack keeps track of indices of unmatched '(' and boundaries of valid substrings.
 * - By calculating the difference between the current index and the index on top of the stack, we determine the length of valid substrings dynamically.
 * 
 * Time Complexity: O(n)
 *    - The string is traversed once, and each push/pop operation on the stack takes O(1).
 * 
 * Space Complexity: O(n)
 *    - In the worst case, the stack may store all indices of the string (e.g., when all characters are '(').
 */

class Solution {
    public int longestValidParentheses(String s) {
        Stack<Integer> stack = new Stack<>(); // Stack to store indices
        int maxLength = 0; // Variable to keep track of the maximum valid length

        stack.push(-1); // Push a placeholder index to handle edge cases

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i); // Get the current character

            if (ch == '(') {
                // If the character is '(', push its index onto the stack
                stack.push(i);
            } else {
                // If the character is ')'

                stack.pop(); // Pop the top of the stack to check for a matching '(' 

                if (stack.isEmpty()) {
                    // If the stack is empty, push the current index as a boundary
                    stack.push(i);
                } else {
                    // Calculate the length of the current valid substring
                    maxLength = Math.max(maxLength, i - stack.peek());
                }
            }
        }

        return maxLength; // Return the maximum length of valid parentheses found
    }
}

/**
 * Example Usage:
 * Input: s = "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()".
 * 
 * Input: s = ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()".
 * 
 * Input: s = ""
 * Output: 0
 * Explanation: There are no valid parentheses substrings.
 */
