var longestPalindrome = function(s) {
    const n = s.length;
    if (n === 0) return "";

    const dp = [];

    // build the 2d dp table
    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            dp[i][j] = false;
        }
    }

    // start of longest palindromic substring
    let start = 0;
    // length of longest palindromic substring
    let maxLength = 1;

    // base case: substrings of length one are palindromic
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    // base case: substrings of length two
    // n-1 because the last row is of length one
    for (let i = 0; i < n-1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    // fill dp table for sbstring of length 3 and more
    for (let length = 3; length <= n; length++) {
        for (let i = 0; i <= n - length; i++) {
            let j = i + length - 1; // end index of sibtring

            console.log({
                i,
                j,
                si: s[i],
                sj: s[j],
                i1: i + 1,
                j1: j - 1,
                dp: dp[i + 1][j - 1],
                val:s[i] === s[j] && dp[i + 1][j - 1]
            })
            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                start = i;
                maxLength = length;
            }
        }
    }

    return s.substring(start, start + maxLength);
};

function main() {
    //console.log(longestPalindrome("babad"));
    //console.log(longestPalindrome("cbbd"));
    console.log(longestPalindrome("racecar"));
}

main();