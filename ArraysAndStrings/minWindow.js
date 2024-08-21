function minWindow(s, t) {
    if (!s || !t) return "";

    const mapT = new Map();
    for (const char of t) {
        mapT.set(char, (mapT.get(char) || 0) + 1);
    }

    const required = mapT.size;
    const filteredS = [];
    for (let i = 0; i < s.length; i++) {
        if (mapT.has(s[i])) {
            filteredS.push([i, s[i]]);
        }
    }

    let left = 0;
    let right = 0;
    let formed = 0;
    const windowCounts = new Map();
    let answer = [-1, 0, 0];

    while (right < filteredS.length) {
        const char = filteredS[right][1];
        windowCounts.set(char, (windowCounts.get(char) || 0) + 1);

        if (windowCounts.get(char) === mapT.get(char)) {
            formed++;
        }

        while (left <= right && formed === required) {
            const start = filteredS[left][0];
            const end = filteredS[right][0];
            
            if (answer[0] === -1 || end - start + 1 < answer[0]) {
                answer = [end - start + 1, start, end];
            }

            console.log({
                left,
                right,
                start,
                end,
                answer,
                windowCounts
            })

            const leftChar = filteredS[left][1];
            windowCounts.set(leftChar, windowCounts.get(leftChar) - 1);

            if (windowCounts.get(leftChar) < mapT.get(leftChar)) {
                formed--;
            }
            left++;
        }
        right++;
    }

    return answer[0] === -1 ? "" : s.substring(answer[1], answer[2] + 1);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("a", "a"));
console.log(minWindow("a", "aa"));
console.log(minWindow("ABAACBAB","ABC"));