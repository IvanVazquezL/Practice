class MaxStack {
    constructor() {
        this.stack = [];
        this.maxStackTracker = [];
    }

    push(value) {
        this.stack.push(value);

        if (this.maxStackTracker.length === 0 || value > this.peekMax()) {
            this.maxStackTracker.push([
                value,
                1
            ])
        } else if (value === this.peekMax()){
            this.maxStackTracker[this.maxStackTracker.length - 1][1] += 1;
        }
    }

    peekMax() {
        return this.maxStackTracker[this.maxStackTracker.length - 1][0];
    }

    pop() {
        const top = this.stack.pop();

        if (top === this.peekMax()) {
            this.maxStackTracker[this.maxStackTracker.length - 1][1] -= 1;

            if (this.maxStackTracker[this.maxStackTracker.length - 1][1] === 0) {
                this.maxStackTracker.pop();
            }
        }

        return top;
    }

    top() {
        return this.stack[this.stack.length - 1];
    }
}

function main() {
    processMaxStack(
        ["MaxStack","push","push","push","peekMax","pop","top","peekMax"],
        [[],[2],[0],[3],[],[],[],[]]
    );
}

function processMaxStack(methods, inputs) {
    const maxStack = new MaxStack();

    for (let i = 1; i < methods.length; i++) {
        /*console.log({
            stack: maxStack.stack,
            maxStackTracker: JSON.stringify(maxStack.maxStackTracker)
        })*/
       console.log(`${methods[i]} - ${inputs[i][0]}`)
        switch(methods[i]) {
            case "push":
                console.log(maxStack.push(inputs[i][0]));
                break;
            case "peekMax":
                console.log(maxStack.peekMax());
                break;
            case "pop":
                console.log(maxStack.pop());
                break;
            case "top":
                console.log(maxStack.top());
                break;
            case "popMax":
                console.log(maxStack.popMax());
                break;
            default:
                break;
        }

        console.log(``)

    }

}

main();