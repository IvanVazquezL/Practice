/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const words = getWords(paragraph);
    const map = new Map();
    let mostCommonWord = "";
    let mostCommonWordRepetition = 0;

    for (const word of words) {
        if (banned.includes(word)) continue;

        map.set(word, (map.get(word) || 0) + 1);

        if (map.get(word) > mostCommonWordRepetition) {
            mostCommonWordRepetition = map.get(word);
            mostCommonWord = word;
        }
    }

    return mostCommonWord;
};

function getWords(paragraph) {
    const set = new Set(["!", "?", "'", ",", ";", ".", " "]);
    const words = [];
    let currentString = "";

    for (let i = 0; i < paragraph.length; i++) {
        if (!set.has(paragraph[i])) {
            currentString += paragraph[i];
        } else if (currentString !== ""){
            words.push(currentString.toLowerCase());
            currentString = "";
        }
    }

    if (currentString !== "") {
        words.push(currentString.toLowerCase());
    }

    return words;
}

function main() {
    console.log(mostCommonWord(
        "Bob hit a ball, the hit BALL flew far after it was hit.",
        ["hit"]
    ));
    console.log(mostCommonWord(
        "a.",
        []
    ));
}

main();