var arrayRankTransform = function(arr) {
    const copy = [...arr];
    arr.sort((a,b) => a - b);
    const map = new Map();
    let ranking = 1;

    for (const number of arr) {
        if (!map.has(number)) {
            map.set(number, ranking);
            ranking++;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        copy[i] = map.get(copy[i]);
    }

    return copy;
};

function main() {
    console.log(arrayRankTransform([40,10,20,30]));
    console.log(arrayRankTransform([100,100,100]));
    console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]));
}

main();