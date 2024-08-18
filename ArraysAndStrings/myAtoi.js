class StateMachine {
    State;
    #currentState;
    #result;
    #sign;
    #INT_MAX;
    #INT_MIN;

    constructor() {
        this.State = {
            q0: 1,
            q1: 2,
            q2: 3,
            qd: 4
        };
        this.#INT_MAX = Math.pow(2, 31) - 1;
        this.#INT_MIN = -Math.pow(2, 31);
        this.#currentState = this.State.q0;
        this.#result = 0;
        this.#sign = 1;
    }

    toStateQ1(ch) {
        this.#sign = ch === "-" ? -1 : 1;
        this.#currentState = this.State.q1
    }

    toStateQ2(digit) {
        this.#currentState = this.State.q2;
        this.appendDigit(digit);
    }

    toStateQd() {
        this.#currentState = this.State.qd;
    }

    appendDigit(digit) {
        // Append digit to result, if out of range return clamped value.
        if (
            this.#result > Math.floor(this.#INT_MAX / 10) ||
            (this.#result === Math.floor(this.#INT_MAX / 10) &&
                digit > this.#INT_MAX % 10)
        ) {
            if (this.#sign == 1) {
                // If sign is 1, clamp result to INT_MAX.
                this.#result = this.#INT_MAX;
            } else {
                // If sign is -1, clamp result to INT_MIN.
                this.#result = this.#INT_MIN;
                this.#sign = 1;
            }

            // When the 32-bit int range is exceeded, a dead state is reached.
            this.toStateQd();
        } else {
            this.#result = this.#result * 10 + digit;
        }
    }

    transition(ch) {
        if (this.#currentState === this.State.q0) {
            if (ch === " ") {
                return;
            } else if (ch === "-" || ch === "+") {
                this.toStateQ1(ch);
            } else if (ch >= "0" && ch <= "9") {
                this.toStateQ2(ch - "0");
            } else {
                this.toStateQd();
            }
        } else if (
            this.#currentState === this.State.q1 ||
            this.#currentState === this.State.q2
        ) {
            if (ch >= "0" && ch <= "9") {
                this.toStateQ2(ch - "0");
            } else {
                this.toStateQd();
            }
        }
    }

    getInteger() {
        return this.#sign * this.#result;
    }

    getState() {
        return this.#currentState;
    }
}

function myAtoi(s) {
    const stateMachine = new StateMachine();

    for (let i = 0; i < s.length && stateMachine.getState() !== stateMachine.State.qd; i++) {
        stateMachine.transition(s[i]);
    }

    return stateMachine.getInteger();
} 

console.log(myAtoi("42"));
console.log(myAtoi(" -042"));
console.log(myAtoi("1337c0d3"));
console.log(myAtoi("0-1"));
console.log(myAtoi("words and 987"));