function canJump(nums: number[]): boolean {
    let fPosition = nums.length - 1;

    for (let idx = nums.length - 2; idx >= 0; idx--) {
        if (idx + nums[idx] >= fPosition) {
            fPosition = idx;
        }
    }

    return fPosition === 0;
};