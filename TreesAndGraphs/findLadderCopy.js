var findLadders = function (beginWord, endWord, wordList) {
    const adjacencyList = new Map();
    const currentPath = [endWord];
    const shortestPaths = [];

    const wordSet = new Set(wordList);
    breadthFirstSearch(beginWord, wordSet, adjacencyList);

    backtrack(endWord, beginWord, adjacencyList, currentPath, shortestPaths);
    return shortestPaths;
}

function backtrack(source, destination, adjacencyList, currentPath, shortestPaths) {
    if (source === destination) {
        const tempPath = [...currentPath];
        tempPath.reverse();
        shortestPaths.push(tempPath);
        return;
    }

    if (!adjacencyList.has(source)) return;

    for (const neighbor of adjacencyList.get(source)) {
        currentPath.push(neighbor);
        backtrack(neighbor, destination, adjacencyList, currentPath, shortestPaths);
        currentPath.pop();
    }
}

function breadthFirstSearch(beginWord, wordSet, adjacencyList) {
    const queue = [beginWord];
    wordSet.delete(beginWord);
    const isEnqueued = new Set();
    isEnqueued.add(beginWord);

    while (queue.length) {
        const visitedWords = new Set();
        const levelSize = queue.length;

        for (let counter = 0; counter < levelSize; counter++) {
            const currentWord = queue.shift();
            const neighborWords = findNeighborWords(currentWord, wordSet);
            for (const neighborWord of neighborWords) {
                processNeighborWord(neighborWord, currentWord, visitedWords, adjacencyList, isEnqueued, queue);
            }
        }
        removeVisitedWords(wordSet, visitedWords);
    }
}

function removeVisitedWords(wordSet, visitedWords) {
    for (const word of visitedWords) {
        wordSet.delete(word);
    }
}

function processNeighborWord(neighborWord, currentWord, visitedWords, adjacencyList, isEnqueued, queue) {
    visitedWords.add(neighborWord);

    if (!adjacencyList.has(neighborWord)) {
        adjacencyList.set(neighborWord, []);
    }

    adjacencyList.get(neighborWord).push(currentWord);

    if (!isEnqueued.has(neighborWord)) {
        queue.push(neighborWord);
        isEnqueued.add(neighborWord);
    }
}

function findNeighborWords(currentWord, wordSet) {
    const startASCIICode = "a".charCodeAt(0);
    const endASCIICode = "z".charCodeAt(0);
    const neighborWords = new Set();
    const characters = currentWord.split('');

    for (let i = 0; i < characters.length; i++) {
        const originalChar = characters[i];

        for (let replaceCode = startASCIICode; replaceCode <= endASCIICode; replaceCode++) {
            if (replaceCode === originalChar.charCodeAt(0)) continue;

            characters[i] = String.fromCharCode(replaceCode);
            const newWord = characters.join('');

            if (!wordSet.has(newWord)) continue;
            neighborWords.add(newWord);
        }
        characters[i] = originalChar;
    }
    return neighborWords;
}

function main() {
    console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"]));
    //console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log"]));
}

main();