var lengthOfLongestSubstring = function(s) {
    const map = new Map();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(map.get(s[right]), left);
        }

        maxLength = Math.max(maxLength, right - left + 1);
        map.set(s[right], right + 1);
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("abba"));

