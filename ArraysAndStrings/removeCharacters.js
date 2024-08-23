function removeCharacters(s) {
    const set = new Set(["!", "?", "'", ",", ";", ".", " "]);
    const words = [];
    let currentString = "";

    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            currentString += s[i];
        } else if (currentString !== "") {
            words.push(currentString);
            currentString = "";
        }
    }

    // Push the last word if there is one
    if (currentString !== "") {
        words.push(currentString.toLowerCase());
    }

    return words;
}


console.log(removeCharacters("a, a, a, a, b,b,b,c, c"));
console.log(removeCharacters("Bob hit a ball, the hit BALL flew far after it was hit."));
console.log(removeCharacters("Bob"));
