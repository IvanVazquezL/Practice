var threeSumClosest = function(nums, target) {
    nums.sort((a,b) => a - b);
    let minimumDifference = Number.MAX_VALUE;

    for (let i = 0; i < nums.length; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(target - sum) < Math.abs(minimumDifference)) {
                minimumDifference = target - sum;
            }

            if (minimumDifference === 0) break;

            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return target - minimumDifference;
};

console.log(threeSumClosest([-1,2,1,-4], 1));
console.log(threeSumClosest([0,0,0], 1));
