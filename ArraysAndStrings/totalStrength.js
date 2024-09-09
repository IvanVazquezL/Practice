var totalStrength = function(strength) {
    const mod = 1e9 + 7;
    const n = strength.length;
    
    let stack = [];
    const rightIndex = new Array(n).fill(n);
    const leftIndex = new Array(n).fill(-1);
    
    // Calculate rightIndex
    for (let i = 0; i < n; i++) {
        while (stack.length !== 0 && strength[stack[stack.length - 1]] >= strength[i]) {
            rightIndex[stack.pop()] = i;
        }
        stack.push(i);
    }
    
    stack = [];
    
    // Calculate leftIndex
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length !== 0 && strength[stack[stack.length - 1]] > strength[i]) {
            leftIndex[stack.pop()] = i;
        }
        stack.push(i);
    }

    let answer = 0;
    let presumOfPresum = new Array(n + 2).fill(0);  // Initialize array with zeros
    
    // Calculate presumOfPresum
    for (let i = 0; i < n; i++) {
        presumOfPresum[i + 2] = (presumOfPresum[i + 1] + strength[i]) % mod;
    }
    
    for (let i = 1; i <= n; i++) {
        presumOfPresum[i + 1] = (presumOfPresum[i + 1] + presumOfPresum[i]) % mod;
    }
    
    // Calculate answer
    for (let i = 0; i < n; i++) {
        const leftBound = leftIndex[i];
        const rightBound = rightIndex[i];
        const leftCount = i - leftBound;
        const rightCount = rightBound - i;

        // Ensure that subtractions don't result in negative values
        const negPresum = (presumOfPresum[i + 1] - presumOfPresum[i - leftCount + 1] + mod) % mod;
        const posPresum = (presumOfPresum[i + rightCount + 1] - presumOfPresum[i + 1] + mod) % mod;

        // Perform the operation safely under mod
        const strengthContribution = (strength[i] * (posPresum * leftCount % mod - negPresum * rightCount % mod + mod) % mod) % mod;
        answer = (answer + strengthContribution) % mod;
    }

    return (answer + mod) % mod;
}


function main() {
    console.log(totalStrength([1,3,1,2]));
}

main();