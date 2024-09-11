/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordsCombinationsMap = getWordsCombinationsMap(wordList);

    const queue = [[beginWord, 1]];
    const visited = new Set();
    visited.add(beginWord);

    while (queue.length) {
        const node = queue.shift();
        const word = node[0];
        const level = node[1];

        for (let i = 0; i < word.length; i++) {
            const combination = word.slice(0, i) + "*" + word.slice(i + 1);

            for (const neighbor of wordsCombinationsMap.get(combination) || []) {
                if (visited.has(neighbor)) continue;

                if (endWord === neighbor) {
                    return level + 1;
                }

                visited.add(neighbor);
                queue.push([neighbor, level + 1]);
            }
        }
    }

    return 0;
}

function getWordsCombinationsMap(wordList) {
    const wordsCombinationsMap = new Map();

    for (const word of wordList) {
        for (let i = 0; i < word.length; i++) {
            const combination = word.slice(0, i) + "*" + word.slice(i + 1);

            if (!wordsCombinationsMap.has(combination)) {
                wordsCombinationsMap.set(combination, []);
            }

            wordsCombinationsMap.get(combination).push(word);
        }
    }

    return wordsCombinationsMap;
}

function main() {
    console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));
}

main();