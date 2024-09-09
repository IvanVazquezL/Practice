var kClosest = function(points, k) {
    const getDistanceSquared = (x,y) => x * x + y * y;

    points.sort((a, b) => {
        const distA = getDistanceSquared(a[0], a[1]);
        const distB = getDistanceSquared(b[0], b[1]);

        return distA - distB;
    });

    return points.slice(0, k);
}

function main() {
    console.log(kClosest([[1,3],[-2,2]], 1)); // [ [ 1, 3 ] ]
    console.log(kClosest([[3,3],[5,-1],[-2,4]], 2)); // [ [ 3, 3 ], [ 5, -1 ] ]
}

main();