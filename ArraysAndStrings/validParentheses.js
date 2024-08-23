var isValid = function(s) {
    if (s.length === 1) return false;

    const openingClosingBrackets = new Map();
    openingClosingBrackets.set("(", ")");
    openingClosingBrackets.set("[", "]");
    openingClosingBrackets.set("{", "}");

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (openingClosingBrackets.has(s[i])) {
            stack.push(openingClosingBrackets.get(s[i]));
        } else if (stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};


console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("([{}])"));
console.log(isValid("(]"));
console.log(isValid("]"));
console.log(isValid(")(){}"));
console.log(isValid("()]{}"));