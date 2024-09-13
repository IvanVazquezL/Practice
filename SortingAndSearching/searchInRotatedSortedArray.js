var search = function(nums, target) {
    const length = nums.length;
    let left = 0;
    let right = length - 1;

    //  find the index of the pivot element (the smallest one)
    while (left <= right) {
        let mid = Math.floor((left + right)/2);

        if (nums[mid] > nums[length-1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    let pivot = left;

    // Early exit if target is at the pivot index
    if (target === nums[pivot]) {
        return pivot;
    }

    //  Determine which section to perform binary search on
    if (target >= nums[pivot] && target <= nums[length -1]) {
        //  Target is in the right part of the pivot
        return binarySearch(pivot, length - 1, target);
    } else {
        // Target is in the left side of the pivot
        return binarySearch(0, pivot - 1, target);
    }

    function binarySearch(left, right, target) {
        while (left <= right) {
            let mid = Math.floor((left + right)/2);

            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    }
};

function main() {
    console.log(search([4,5,6,7,0,1,2,3], 1));
    console.log(search([4,5,6,7,0,1,2,3], 3));
    console.log(search([1], 0));
}

main();