var numEquivDominoPairs = function(dominoes) {
    const map = new Map();
    let numPairs = 0;

    for (const [a,b] of dominoes) {
        const key =  a < b ?
            `${a},${b}` :
            `${b},${a}`;

        if (map.has(key)) {
            numPairs += map.get(key);
            map.set(key, map.get(key) + 1);
        } else {
            map.set(key, 1);
        }
    }

    return numPairs;
};

function main() {
    console.log(numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]]));
    console.log(numEquivDominoPairs([[1,2],[1,2],[1,1],[1,2],[2,2]]));

}

main();