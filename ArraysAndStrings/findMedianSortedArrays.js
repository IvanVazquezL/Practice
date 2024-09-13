var findMedianSortedArrays = function(nums1, nums2) {
    let arr = [];
    let p1 = 0;
    let p2 = 0;

    while (p1 < nums1.length && p2 < nums2.length) {
        if (nums1[p1] < nums2[p2]) {
            arr.push(nums1[p1]);
            p1++;
        } else {
            arr.push(nums2[p2]);
            p2++;
        }
    }

    arr = [...arr, ...nums1.slice(p1), ...nums2.slice(p2)];
    
    if (arr.length % 2 === 0) {
        const middleIndex2 = arr.length / 2;
        const middleIndex1 = middleIndex2 - 1;

        return (arr[middleIndex1] + arr[middleIndex2]) / 2;
    } else {
        const middleIndex = Math.floor(arr.length/2);
        return arr[middleIndex];
    }
};

function main() {
    console.log(findMedianSortedArrays([1,3], [2]));
    console.log(findMedianSortedArrays([1,2], [3,4]));
}

main();