function numRollsToTarget(n, k, target) {
    const mod = 1e9 + 7;
    const dp = [];

    // build the 2d dp table
    for (let i = 0; i <= n; i++) {
        dp[i] = [];
        for (let j = 0; j <= target; j++) {
            dp[i][j] = 0;
        }
    }

    // base case for 0 dice
    // with 0 dice to get 0 sum we have to do nothing
    dp[0][0] = 1;

    // fill the dp table
    // we start with dice
    for (let dice = 1; dice <= n; dice++) {
        // then sum
        for (let sum = 1; sum <= target; sum++) {
            // finally faces
            for (let face = 1; face <= k; face++) {
                if (sum - face >= 0) {
                    dp[dice][sum] = (dp[dice][sum] + dp[dice - 1][sum - face]) % mod;
                }
            }
        }
    }


    return dp[n][target];
}

function main() {
    console.log(numRollsToTarget(1, 6, 3)); // Output: 1
    console.log(numRollsToTarget(2, 6, 7)); // Output: 6
    console.log(numRollsToTarget(30, 30, 500)); // Output: 222616187
}

main();