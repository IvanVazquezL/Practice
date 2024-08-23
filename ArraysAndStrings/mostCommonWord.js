var mostCommonWord = function(paragraph, banned) {
    const words = removeCharacters(paragraph);
    const set = new Set(banned);
    const map = new Map();
    let maxRepetitions = 0
    let mostCommonWordAnswer = ""; 

    for (let i = 0; i < words.length; i++) {
        if (!set.has(words[i])) {
            map.set(words[i], (map.get(words[i]) || 0) + 1);

            if (map.get(words[i]) > maxRepetitions) {
                maxRepetitions = map.get(words[i]);
                mostCommonWordAnswer = words[i];
            }
        }
    }

    return mostCommonWordAnswer;
};

function removeCharacters(s) {
    const set = new Set(["!", "?", "'", ",", ";", ".", " "]);
    const words = [];
    let currentString = "";

    for (let i = 0; i < s.length; i++) {
        if (!set.has(s[i])) {
            currentString += s[i];
        } else if (currentString !== "") {
            words.push(currentString.toLowerCase());
            currentString = "";
        }
    }

    // Push the last word if there is one
    if (currentString !== "") {
        words.push(currentString.toLowerCase());
    }

    return words;
}


console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
console.log(mostCommonWord("a.", []));
console.log(mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]));
console.log(mostCommonWord("Bob", []));

