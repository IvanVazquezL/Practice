var generateSentences = function(synonyms, text) {
    const graph = new Map();

    for (const [word1, word2] of synonyms) {
        addEdge(graph, word1, word2); 
    }

    const words = text.split(' ');

    const result = [];
    backtrack(0, [], words, graph, result);

    return result.sort();
}

function findAllSynonyms(word, graph) {
    if (!graph.has(word)) {
        return [word];
    }

    const visited = new Set();
    const queue = [word];
    const synonymsGroup = [];
    visited.add(word);

    while (queue.length) {
        const currentWord = queue.shift();
        synonymsGroup.push(currentWord);

        for (const neighbor of graph.get(currentWord)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return synonymsGroup.sort();
}

function backtrack(index, currentSentence, words, graph, result) {
    if (index === words.length) {
        result.push(currentSentence.join(' '));
        return;
    }

    const currentWord = words[index];
    const synonymsForCurrentWord = findAllSynonyms(currentWord, graph);

    for (const synonym of synonymsForCurrentWord) {
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