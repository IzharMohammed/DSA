/**
 * Calculates the maximum amount of water a container can store formed by two vertical lines.
 * 
 * Approach:
 * 1. Use a two-pointer technique where one pointer (`left`) starts at the beginning and the other (`right`) starts at the end of the array.
 * 2. Calculate the current area between the two lines:
 *    - The width is the distance between the two pointers (`right - left`).
 *    - The height is the minimum of the two lines (`Math.min(height[left], height[right])`).
 *    - The area is `width * height`.
 * 3. Update the `max_area` if the current area is larger.
 * 4. Move the pointer pointing to the shorter line inward (since moving the longer line cannot increase the area).
 * 5. Repeat until the two pointers meet.
 * 
 * Intuition:
 * - The area is constrained by the shorter line, so moving the shorter line inward might lead to a larger area.
 * - Moving the longer line inward will never increase the area because the width decreases and the height remains limited by the shorter line.
 * - This approach efficiently narrows down the possible pairs to find the maximum area.
 * 
 * Time Complexity (TC): O(n), where n is the number of elements in the array. We traverse the array once with two pointers.
 * Space Complexity (SC): O(1), as we use a constant amount of extra space (two pointers and a few variables).
 * 
 * Problem Link: https://leetcode.com/problems/container-with-most-water/
 * 
 * @param height An array where each element represents the height of a vertical line at that index.
 * @returns The maximum area of water that can be contained by two lines.
 */
function maxArea(height: number[]): number {
    let max_area = 0; // Initialize the maximum area to 0
    let left = 0; // Pointer starting at the beginning of the array
    let right = height.length - 1; // Pointer starting at the end of the array

    while (left < right) {
        // Calculate the current area
        const curr_area = (right - left) * Math.min(height[left], height[right]);

        // Update the maximum area if the current area is larger
        if (curr_area > max_area) {
            max_area = curr_area;
        }

        // Move the pointer pointing to the shorter line inward
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max_area;
}

// Example Test Cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49 (between heights 8 and 7)
console.log(maxArea([1, 1])); // Output: 1 (between heights 1 and 1)