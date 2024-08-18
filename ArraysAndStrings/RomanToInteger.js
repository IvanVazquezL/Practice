var romanToInt = function(s) {
    const values = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
        IV: 4,
        IX: 9,
        XL: 40,
        XC: 90,
        CD: 400,
        CM: 900,
    };
    let last = s.length - 1;
    let answer = values[s[last]];

    for (let i = last - 1; i >= 0; i--) {
        if (values[s[i]] < values[s[i + 1]]) {
            answer -= values[s[i]];
        } else {
            answer += values[s[i]];
        }
    }

    return answer;
};

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));