var generateSentences = function(synonyms, text) {
    const graph = new Map();

    //graph where each word is connected to its synonym
    for (const [word1, word2] of synonyms) {
        addEdge(graph, word1, word2);
    }

    //split the text into words
    const words = text.split(' ');

    // initialize the result array and start backtracking
    const result = [];
    backtrack(0, [], words, graph, result);

    return result.sort();
};

function findAllSynonyms(word, graph) {
    if (!graph.has(word)) {
        return [word];
    }

    const visited = new Set();
    const queue = [word];
    visited.add(word);
    const synonymGroup = [];

    while (queue.length) {
        const current = queue.shift();
        synonymGroup.push(current);

        for (let neighbor of graph.get(current)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return synonymGroup.sort();
}

function backtrack(index, currentSentence, words, graph, result) {
    if (index === words.length) {
        result.push(currentSentence.join(' '));
        return;
    }

    const word = words[index];
    const synonymsForWord = findAllSynonyms(word, graph);

    for (let synonym of synonymsForWord) {
        currentSentence.push(synonym);
        backtrack(index + 1, currentSentence, words, graph, result);
        currentSentence.pop();
    }
}

function addEdge(graph, word1, word2) {
    if (!graph.has(word1)) {
        graph.set(word1, new Set());
    }

    if (!graph.has(word2)) {
        graph.set(word2, new Set());
    }

    graph.get(word1).add(word2);
    graph.get(word2).add(word1);
}

function main() {
    console.log(generateSentences(
        [["happy","joy"],["sad","sorrow"],["joy","cheerful"]],
        "I am happy today but was sad yesterday"
    ));
   /* console.log(generateSentences(
        [["happy","joy"],["cheerful","glad"]],
        "I am happy today but was sad yesterday"
    ));*/
}

main();