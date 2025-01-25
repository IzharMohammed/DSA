/*
Problem: Valid Parentheses (LeetCode Problem 20)

Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

Examples:
1. Input: s = "()" -> Output: true
2. Input: s = "()[]{}" -> Output: true
3. Input: s = "(]" -> Output: false
4. Input: s = "([])" -> Output: true

Approach:
We solve this problem using a stack data structure, which ensures that brackets are matched in the correct order.

Method 1 (Commented Out):
- Traverse the string character by character.
- For every opening bracket ('(', '{', '['), push the corresponding closing bracket (')', '}', ']') onto the stack.
- For every closing bracket:
    - If the stack is empty or the top of the stack does not match the current bracket, return false.
- At the end, if the stack is empty, return true.

        // Stack<Character> stack = new Stack<>();

        // for (int i = 0; i < s.length(); i++) {
        // char currentChar = s.charAt(i);
        // if (currentChar == '(') {
        // stack.push(')');
        // } else if (currentChar == '{') {
        // stack.push('}');
        // } else if (currentChar == '[') {
        // stack.push(']');
        // } else {
        // if (stack.isEmpty() || stack.pop() != currentChar) {
        // return false;
        // }
        // }
        // }
        // return stack.isEmpty();

Method 2 (Optimized and Implemented Below):
- The same approach as Method 1, but written in a cleaner and concise manner using a for-each loop.

Time Complexity:
- O(n), where `n` is the length of the string. We traverse the string once, and each push/pop operation on the stack takes O(1).

Space Complexity:
- O(n), in the worst case, all characters in the string are opening brackets and are pushed onto the stack.

Below is the code with comments explaining each step:
*/

class Solution {
    public boolean isValid(String s) {
        // Initialize a stack to store the expected closing brackets
        Stack<Character> stack = new Stack<>();

        // Iterate over each character in the input string
        for (char ch : s.toCharArray()) {
            // If it's an opening bracket, push the corresponding closing bracket onto the stack
            if (ch == '(')
                stack.push(')');
            else if (ch == '{')
                stack.push('}');
            else if (ch == '[')
                stack.push(']');
            else if (stack.isEmpty() || stack.pop() != ch) // If the stack is empty or the top of the stack does not match the current closing bracket
                return false; // Invalid string
        }

        // If the stack is empty, all brackets were matched correctly
        return stack.isEmpty();
    }
}

/*
Summary of Approach:
- Use a stack to track expected closing brackets for every opening bracket encountered.
- Validate that every closing bracket matches the top of the stack.
- Ensure the stack is empty at the end for the string to be valid.

Time Complexity: O(n)
Space Complexity: O(n)
*/

