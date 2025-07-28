function removeDuplicates(nums: number[]): number {
    let i = 1;
    let j = 1;
    const length = nums.length - 1;

    while (i <= length) {
        if (nums[i] === nums[i - 1]) {
            i++;
        } else {
            nums[j] = nums[i];
            j++;
            i++;
        }
    }

    return j;
};