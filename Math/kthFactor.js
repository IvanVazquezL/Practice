var kthFactorII = function(n, k) {
    let count = 0;

    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            count++;
        }

        if (count === k) return i;
    }

    return -1;
};

var kthFactor = function(n, k) {
    const smallFactors = [];
    const largeFactors = [];

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            smallFactors.push(i);

            if (i !== n/i) {
                largeFactors.push(n/i);
            }
        }
    }

    const allFactors = smallFactors.concat(largeFactors.reverse());

    if (k <= allFactors.length) {
        return allFactors[k - 1];
    } else {
        return -1;
    }
};

function main() {
    console.log(kthFactor(12, 3));
    console.log(kthFactor(7, 2));
    console.log(kthFactor(4, 4));
}

main();