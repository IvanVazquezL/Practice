var reorderLogFiles = function(logs) {
    const letterLogs = [];
    const numberLogs = [];

    for (let i = 0; i < logs.length; i++) {
        const log = logs[i].split(" ");

        if (isNaN(log[1] - "0")) {
            letterLogs.push(logs[i]);
        } else {
            numberLogs.push(logs[i]);
        }
    }

    const map = new Map();
    const letterLogsContent = []

    for (let i = 0; i < letterLogs.length; i++) {
        const indexOfFirstSpace = letterLogs[i].indexOf(' ');
        const identifier = letterLogs[i].slice(0, indexOfFirstSpace);
        const contents = letterLogs[i].slice(indexOfFirstSpace + 1);

        map.set(contents, [...(map.get(contents) || []), identifier]);
        letterLogsContent.push(contents);
    }

    for (const [key,value] of map.entries()) {
        if (value.length > 1) {
            map.set(key, value.sort());
        }
    }

    letterLogsContent.sort();

    const letterLogsSorted = [];

    for (let i = 0; i < letterLogsContent.length; i++) {
        letterLogsSorted.push(
            map.get(letterLogsContent[i]).shift() + " " + letterLogsContent[i]
        );
    }

    return [...letterLogsSorted, ...numberLogs];
};

console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]));
console.log(reorderLogFiles(["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]));
