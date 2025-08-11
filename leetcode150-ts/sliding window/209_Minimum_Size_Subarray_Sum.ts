function minSubArrayLen(target: number, nums: number[]): number {
    let left = 0;
    let min_len = Infinity;
    let curr_len = 0;

    for (let right = 0; right < nums.length; right++) {
        curr_len += nums[right];

        while (curr_len >= target) {
            min_len = Math.min(min_len, right - left + 1);
            curr_len -= nums[left];
            left++;
        }

    }

    return min_len === Infinity ? 0 : min_len;
};