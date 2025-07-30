function removeDuplicates(nums: number[]): number {
 if(nums.length <= 2) return nums.length;

    let k = 2;

    for(let i=2; i<nums.length;i++){
        if(nums[i] != nums[k-2]){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};