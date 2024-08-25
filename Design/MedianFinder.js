class MedianFinder {
    constructor() {

    }

    addNum(value) {

    }

    findMedian() {

    }
}

function main() {
    processMedianFinder(
        ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"],
        [[], [1], [2], [], [3], []]
    );
}

function processMedianFinder(methods, inputs) {
    const medianFinder = new MedianFinder();

    for (let i = 1; i < methods.length; i++) {
        switch(methods[i]) {
            case "addNum":
                console.log(medianFinder.addNum(inputs[i][0]));
                break;
            case "findMedian":
                console.log(medianFinder.findMedian());
                break;
            default:
                break;
        }
    }
}

main();