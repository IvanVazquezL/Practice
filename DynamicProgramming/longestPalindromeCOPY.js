var longestPalindrome = function(s) {
    const n = s.length;
    if (n === 0) return "";

    const dp = []

    // create 2d dp filled with false
    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            dp[i][j] = false;
        }
    }

    let start = 0;
    let maxLength = 1;

    // base case, substring length 1 are palindromic
    for (let i = 0; i < n; i++) {
        dp[i][i] = true;
    }

    //base case, check subtring length 2
    for (let i = 0; i < n - 1; i++) {
        if (s[i] === s[i + 1]) {
            dp[i][i + 1] = true;
            start = i;
            maxLength = 2;
        }
    }

    // fill dp for subtrings with length greater than or equal to 3
    for (let length = 3; length <= n; length++) {
        for (let i = 0;  i <= n - length; i++) {
            const j = i + length - 1;

            if (s[i] === s[j] && dp[i + 1][j - 1]) {
                dp[i][j] = true;
                start = i;
                maxLength = length;
            }
        }
    }

    return s.substring(start, start + maxLength);
}

function main() {
    //console.log(longestPalindrome("babad"));
    //console.log(longestPalindrome("cbbd"));
    console.log(longestPalindrome("racecar"));
}

main();