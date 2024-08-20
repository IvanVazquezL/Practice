var groupAnagrams = function(strs) {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        const string = strs[i].split("").sort().join("");

        if (map.has(string)) {
            map.set(string, [...map.get(string), strs[i]])
        } else {
            map.set(string, [strs[i]])
        }
    }

    const answer = [];

    for (const value of map.values()) {
        answer.push(value);
    }

    return answer
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));