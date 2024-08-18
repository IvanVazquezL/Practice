var maxArea = function(height) {
    let left = 0;
    answer = 0;
    right = height.length - 1;

    while (left < right) {
        const minHeight = Math.min(height[left], height[right]);
        answer = Math.max(answer, minHeight * (right - left));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return answer;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));
console.log(maxArea([1,1]));