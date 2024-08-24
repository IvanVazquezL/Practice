class MinStack {
    constructor() {
        this.stack = [];
        this.minStackTracker = [];
    }

    push(value) {
        this.stack.push(value);

        if (this.minStackTracker.length === 0 || value < this.getMin()) {
            this.minStackTracker.push([
                value,
                1
            ])
        } else if (value === this.getMin()) {
            this.minStackTracker[this.minStackTracker.length - 1][1] += 1;
        }
    }

    getMin() {
        return this.minStackTracker[this.minStackTracker.length - 1][0];
    }

    pop() {
        const topMainStack = this.stack.pop();

        if (topMainStack === this.getMin()) {
            this.minStackTracker[this.minStackTracker.length - 1][1] -= 1;

            if (this.minStackTracker[this.minStackTracker.length - 1][1] === 0) {
                this.minStackTracker.pop();
            }
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }
}

function main() {
    processMinStack(
        ["MinStack","push","push","push","getMin","pop","top","getMin"],
        [[],[-2],[0],[-3],[],[],[],[]]
    );
}

function processMinStack(methods, inputs) {
    const minStack = new MinStack();

    for (let i = 1; i < methods.length; i++) {
        /*console.log({
            stack: minStack.stack,
            minStackTracker: JSON.stringify(minStack.minStackTracker)
        })*/
        switch(methods[i]) {
            case "push":
                console.log(minStack.push(inputs[i][0]));
                break;
            case "getMin":
                console.log(minStack.getMin());
                break;
            case "pop":
                console.log(minStack.pop());
                break;
            case "top":
                console.log(minStack.top());
                break;
            default:
                break;
        }
    }

}

main();