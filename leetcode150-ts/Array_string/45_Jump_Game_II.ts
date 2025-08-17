function jump(nums: number[]): number {
    let totalJumps = 0;
    const destination = nums.length - 1;
    let coverage = 0;
    let lastJumpIdx = 0;

    // Base case
    if (nums.length === 1) return 0;

    // Greedy strategy: extend coverage as long as possible
    for (let i = 0; i < nums.length; i++) {
        coverage = Math.max(coverage, i + nums[i]);

        if (i === lastJumpIdx) {
            lastJumpIdx = coverage;
            totalJumps++;

            // check if we reached destination already
            if (coverage >= destination) {
                return totalJumps;
            }
        }
    }

    return totalJumps;
}
