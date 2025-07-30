function majorityElement(nums: number[]): number {
    const target = Math.floor(nums.length/2);

    nums.sort((a,b)=>a-b);
    let count = 1;
    let i = 1;

    while(count <= target){
        if(nums[i]===nums[i-1]){
            count++;
            i++;
        }else{
            count=1;
            i++;
        }
    }

    return nums[i-1];
};