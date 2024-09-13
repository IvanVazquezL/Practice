var findKthLargest = function(nums, k) {
    let minValue = Number.MAX_VALUE;
    let maxValue = Number.MIN_VALUE;

    //  Find the min and max values in the array
    for (const num of nums) {
        minValue = Math.min(minValue, num);
        maxValue = Math.max(maxValue, num);
    }

    // Create the count array
    const count = new Array(maxValue - minValue + 1).fill(0);
    
    // Populate the count array
    for (let num of nums) {
        count[num - minValue]++;
    }

    let remain = k;
    for (let num = count.length - 1; num >= 0; num--) {
        remain -= count[num];
        if (remain <= 0) {
            return num + minValue;
        }
    }

    return -1;
};

function main() {
    console.log(findKthLargest([3,2,1,5,6,4], 2));
    //console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
}

main();