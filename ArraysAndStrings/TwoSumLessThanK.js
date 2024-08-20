var twoSumLessThanK = function(nums, k) {
    nums.sort((a,b) => a - b);
    let sumAnswer = -1;
    let left = 0;
    let right = nums.length - 1;

    console.log(nums)

    while (left < right) {
        const sum = nums[left] + nums[right];

        if (sum < k) {
            sumAnswer = Math.max(sumAnswer, sum);
            left++;
        } else {
            right--;
        }
    }

    return sumAnswer;
};

console.log(twoSumLessThanK([34,23,1,24,75,33,54,8], 60));
console.log(twoSumLessThanK([10,20,30], 15));