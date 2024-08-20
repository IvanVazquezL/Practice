var strStr = function(haystack, needle) {
    let left = 0;

    for (let right = 0; right < haystack.length; right++) {
        while (haystack[right + left] === needle[left]) {
            left++;
            if (left === needle.length) return right;
        }

        left = 0;
    }

    return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
console.log(strStr("mississippi", "issip"));