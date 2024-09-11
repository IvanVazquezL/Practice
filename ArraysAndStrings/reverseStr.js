/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    const arr = s.split('');

    for (let i = 0; i < arr.length; i += 2 * k) {
        //  Find the end of the first k characters
        //  Reverse only up to the remaining length of the string
        const end = Math.min(i + k, arr.length);
        reverse(arr, i, end - 1);
    }

    return arr.join('');
};

function reverse(arr, left, right) {
    while (left < right) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
}

function main() {
    console.log(reverseStr("abcdefg", 2)); // Output: "bacdfeg"
}

main();