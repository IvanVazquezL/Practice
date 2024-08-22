var productExceptSelf = function(nums) {
    const left = [1];
    const right = [];
    right[nums.length - 1] = 1;
    const answer  = [];

    for (let i = 1; i < nums.length; i++) {
        left[i] = left[i - 1] * nums[i - 1];
    }

    for (let i = nums.length - 2; i >= 0; i--) {
        right[i] = right[i + 1] * nums[i + 1];
    }

    for (let i = 0; i < nums.length; i++) {
        answer.push(left[i] * right[i]);
    }

    return answer;
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));