// function threeSum(nums: number[]): number[][] {
//     nums.sort((a, b) => a - b);

//     const result: number[][] = [];

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;

//         const target = -nums[i];

//         const seen = new Map<number, boolean>();

//         for (let j = i + 1; j < nums.length; j++) {
//             // if (j > 0 && nums[j] === nums[j + 1]) continue;
//             const complement = target - nums[j];

//             if (seen.has(complement)) {
//                 result.push([nums[i], complement, nums[j]]);
//                 while (j < nums.length - 1 && nums[j] === nums[j + 1]) j++;
//             }

//             seen.set(nums[j], true);
//         }
//     }
//     return result;
// };

function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}