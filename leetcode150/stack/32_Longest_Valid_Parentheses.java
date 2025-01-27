/**
 * Problem: Longest Valid Parentheses
 * 
 * Given a string containing just the characters '(' and ')', 
 * return the length of the longest valid (well-formed) parentheses substring.
 * 
 * Approach:
 * 1. Use a stack to keep track of indices of characters in the string.
 * 2. Push a placeholder index (-1) to the stack initially to handle edge cases.
 * 3. Traverse the string character by character:
 *    - If the character is '(', push its index onto the stack.
 *    - If the character is ')':
 *      - Pop the top of the stack to check if there is a matching '('.
 *      - If the stack becomes empty after popping, push the current index onto the stack (to mark it as a boundary).
 *      - Calculate the length of the current valid substring using the difference between the current index and the top index of the stack. Update the maximum length if this length is greater.
 * 4. Return the maximum length of valid parentheses found.
 * 
: * Time Complexity: O(n)
 *    - We traverse the string once, performing O(1) operations for each character.
 * 
 * Space Complexity: O(n)
 *    - In the worst case, the stack may store all indices of the string.
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
            */




