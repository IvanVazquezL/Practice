/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordsLength = beginWord.length;

    const wordsCombinationsMap = getWordsCombinationsMap(wordList, wordsLength);
    
    const queue = [[beginWord, 1]];
    const visited = new Set();
    visited.add(beginWord);

    while (queue.length) {
        const node = queue.shift();
        const word = node[0];
        const level = node[1];

        for (let i = 0; i < wordsLength; i++) {
            const combination = word.substring(0, i) + "*" + word.substring(i + 1);

            for (const adjacentWord of wordsCombinationsMap.get(combination) || []) {
                if (visited.has(adjacentWord)) {
                    continue;
                }

                if (adjacentWord === endWord) {
                    return level + 1;
                }

                visited.add(adjacentWord);
                console.log([adjacentWord, level + 1])
                queue.push([adjacentWord, level + 1]);
            }
        }
    }
    return 0;
};

/**
 * @param {string[]} wordList
 * @param {number} wordsLength
 */
function getWordsCombinationsMap(wordList, wordsLength) {
    // Dictionary to hold combination of words that can be formed,
    // from any given word. By changing one letter at a time.
    const wordsCombinationsMap = new Map();

    for (const word of wordList) {
        for (let i = 0; i < wordsLength; i++) {
            const combination = word.substring(0, i) + "*" + word.substring(i + 1);
            
            if (!wordsCombinationsMap.has(combination)) {
                wordsCombinationsMap.set(combination, []);
            }

            wordsCombinationsMap.get(combination).push(word);
        }
    }
    console.log(wordsCombinationsMap)
    return wordsCombinationsMap;
}

function main() {
    console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));
    console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]));
}

main();