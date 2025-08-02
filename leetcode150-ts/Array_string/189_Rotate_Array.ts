function rotate(nums: number[], k: number): void {
    const n = nums.length;
    k = k % n;

    //TC:- O(n)
    // Reverse entire array
    reverse(nums, 0, n - 1);
    // Reverse first k elements
    reverse(nums, 0, k - 1);
    // Reverse remaining elements
    reverse(nums, k, n - 1);

    // time complexity of O(n × k),
    // for(let i = 0; i < k; i++){
    //     moveLastToFirst(nums)
    // }
};

function reverse(arr: number[], start: number, end: number): void {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        start++;
        end--
    }
}


function moveLastToFirst(arr: number[]): void {
    if (arr.length === 0) return ;
    arr.unshift(arr.pop()!);
}