function majorityElement(nums: number[]): number {
    //Approach -1 TC:- O(nlogn)(Due to sort function) SC:- O(1) 

    // const target = Math.floor(nums.length/2);

    // nums.sort((a,b)=>a-b);
    // let count = 1;
    // let i = 1;

    // while(count <= target){
    //     if(nums[i]===nums[i-1]){
    //         count++;
    //         i++;
    //     }else{
    //         count=1;
    //         i++;
    //     }
    // }

    // return nums[i-1];

    //Approach - 2 TC:- O(n) SC:- O(1)
    //Boyer-Moore Voting Algorithm

    let count = 0;
    let candidate: number | null = null;

    for (const num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }

    return candidate!;

};