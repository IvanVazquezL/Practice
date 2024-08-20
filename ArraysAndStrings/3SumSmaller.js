var threeSumSmaller = function(nums, target) {
    nums.sort((a,b) => a - b);
    let sum = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        sum += twoSumSmaller(nums, i + 1, target - nums[i]);
    }

    return sum;
};

var twoSumSmaller = function(nums, startIndex, target) {
    let sum = 0;
    let left = startIndex;
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

console.log(threeSumSmaller([-2,0,1,3], 2));
console.log(threeSumSmaller([], 0));
console.log(threeSumSmaller([0], 0));