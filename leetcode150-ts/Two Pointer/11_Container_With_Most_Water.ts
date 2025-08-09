function maxArea(height: number[]): number {
    let max_area = 0;

    let left = 0;

    let right = height.length - 1;

    let curr_area = 0;

    while (left < right) {

        curr_area = (right - left) * Math.min(height[left], height[right]);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }

        if (curr_area > max_area) {
            max_area = curr_area;
        }
    }

    return max_area;
};