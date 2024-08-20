var twoSumSmaller = function(nums, target) {
    let sum = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] + nums[right] < target) {
            sum += right - left;
            left++;
        } else {
            right--;
        }
    }

    return sum;
};

console.log(twoSumSmaller([-2,0,1,3], 2));
console.log(twoSumSmaller([], 0));
console.log(twoSumSmaller([0], 0));