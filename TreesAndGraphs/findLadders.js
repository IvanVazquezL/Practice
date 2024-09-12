var findLadders = function (beginWord, endWord, wordList) {
    const adjacencyList = new Map();
    // every path will start from the endWord
    const currentPath = [endWord];
    const shortestPaths = [];

    // copying the words into the set for efficient deletion in BFS
    let wordSet = new Set(wordList);
    breadthFirstSearch(beginWord, wordSet, adjacencyList);

    // traverse the DAG to find all the paths between endWord and beginWord
    backtrack(endWord, beginWord, adjacencyList, currentPath, shortestPaths);

    return shortestPaths;
};

// Helper function to perform backtracking and find all paths
function backtrack(source, destination, adjacencyList, currentPath, shortestPaths) {
    // store the path if we reached the endWord
    if (source === destination) {
        const tempPath = [...currentPath];
        tempPath.reverse();
        shortestPaths.push(tempPath);
        return;
    }

    if (!adjacencyList.has(source)) return;

    for (const neighborWord of adjacencyList.get(source)) {
        currentPath.push(neighborWord);
        backtrack(neighborWord, destination, adjacencyList, currentPath, shortestPaths);
        currentPath.pop();
    }
}

// Helper function to perform BFS and build the adjacency list
function breadthFirstSearch(beginWord, wordSet, adjacencyList) {
    const queue = [beginWord];
    // remove the root word which is the first layer in the BFS
    wordSet.delete(beginWord);
    const isEnqueued = new Set();  // Change from Map to Set
    isEnqueued.add(beginWord);   // Add the beginWord to the set
    
    while (queue.length) {
        // visited will store the words of the current layer
        const visitedWords = new Set();
        const levelSize = queue.length;

        for (let counter = 0; counter < levelSize; counter++) {
            const currentWord = queue.shift();
            // findNeighbors will have the adjacent words of the currWord
            const neighborWords = findNeighborWords(currentWord, wordSet);
            for (const neighborWord of neighborWords) {
                processNeighborWord(neighborWord, currentWord, visitedWords, adjacencyList, isEnqueued, queue);
            }
        }
        // removing the words of the previous layer
        removeVisitedWords(wordSet, visitedWords);
    }
}

// Helper function to find neighbors of a word
function findNeighborWords(word, wordSet) {
    const startASCIICode = 'a'.charCodeAt(0);
    const endASCIICode = 'z'.charCodeAt(0);
    const neighborWords = new Set();;
    const characters = word.split('');

    for (let i = 0; i < characters.length; i++) {
        const originalChar = characters[i];
        
        for (let replaceCode = startASCIICode;  replaceCode <= endASCIICode; replaceCode++) {
            if (replaceCode === originalChar.charCodeAt(0)) continue;

            characters[i] = String.fromCharCode(replaceCode);
            const newWord = characters.join("");

            if (!wordSet.has(newWord)) continue;
            neighborWords.add(newWord);
        }
        characters[i] = originalChar;
    }
    return neighborWords;
}

function processNeighborWord(neighborWord, currentWord, visitedWords, adjacencyList, isEnqueued, queue) {
    visitedWords.add(neighborWord);

    if (!adjacencyList.has(neighborWord)) {
        adjacencyList.set(neighborWord, []);
    }

    // Add the edge from neighbor to currWord in the adjacency list
    adjacencyList.get(neighborWord).push(currentWord);

    // If the neighbor is not already enqueued, enqueue it and mark it as enqueued
    if (!isEnqueued.has(neighborWord)) {
        queue.push(neighborWord);
        isEnqueued.add(neighborWord);
    }
}

function removeVisitedWords(wordSet, visitedWords) {
    for (const word of visitedWords) {
        wordSet.delete(word);
    }
}

function main() {
    console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log","cog"]));
    //console.log(findLadders("hit", "cog", ["hot","dot","dog","lot","log"]));
}

main();