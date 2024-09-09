class MovingAverage {
    size = 0;
    window = [];
    sum = 0;

    constructor(size) {
        this.size = size;
    }

    next(val) {
        if (this.window.length + 1 > this.size) {
            const valToRemove = this.window.shift();
            this.sum -= valToRemove;
        }

        this.window.push(val);
        this.sum += val;

        return this.sum/this.window.length;
    }
}

function main() {
    const ma = new MovingAverage(3);
    console.log(ma.next(1));
    console.log(ma.next(10));
    console.log(ma.next(3));
    console.log(ma.next(5));
}

main();