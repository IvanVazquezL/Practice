var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);

    const merged = [];

    for (const interval of intervals) {
        if (!merged.length || merged[merged.length - 1][1] < interval[0]) {
            merged.push(interval);
        } else {
            merged[merged.length - 1][1] = Math.max(
                merged[merged.length - 1][1],
                interval[1]
            );
        }
    }
    return merged;
};

function main() {
    console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
    console.log(merge([[1,4],[4,5]]));
}

main();