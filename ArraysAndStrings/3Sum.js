var threeSum = function(nums) {
    nums.sort((a,b) => a - b);
    const answer = [];

    for (let i = 0; i < nums.length && nums[i] <= 0; i++)  {
        if (i === 0 || nums[i - 1] !== nums[i]) {
            twoSum(nums, i, answer);
        }
    }

    return answer;
};

var twoSum = function(nums, i, answer) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        if (sum < 0) {
            left++;
        } else if (sum > 0) {
            right--;
        } else {
            answer.push([
                nums[i],
                nums[left],
                nums[right]
            ]);
            left++;
            right--;

            while (left < right && nums[left] === nums[left - 1]) left++;
        }
    }
};

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([0,1,1]));
console.log(threeSum([0,0,0]));
console.log(threeSum([0,0,0,0]));