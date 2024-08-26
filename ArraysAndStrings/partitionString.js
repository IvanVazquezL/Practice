var partitionString = function(s) {
    const lastSeen = new Array(26).fill(-1);
    let answer = 1;
    let substringStart = 0;

    for (let i = 0; i < s.length; i++) {
        const characterLastSeenPosition = 
            s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (lastSeen[characterLastSeenPosition] >= substringStart) {
            answer++;
            substringStart = i;
        }

        lastSeen[characterLastSeenPosition] = i;
    }

    return answer;
};

function main() {
    console.log(partitionString("abacaba"));
    console.log(partitionString("ssssss"));
}

main();