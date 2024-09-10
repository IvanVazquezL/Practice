function greatestCommonDivisor(num1, num2) {
    while (num2 !== 0) {
        const remainder = num1 % num2;
        num1 = num2;
        num2 = remainder;
    }
    return num1;
}

var gcdOfStrings = function(str1, str2) {
    const gcdLength = greatestCommonDivisor(str1.length, str2.length); 
    
    const candidate = str1.slice(0, gcdLength);

    if (isDivisible(str1, candidate) && isDivisible(str2, candidate)) {
        return candidate;
    }

    return "";
};

function isDivisible(string, candidate) {
    const isStringLengthMultipleOfCandidate = string.length % candidate.length !== 0;
    
    if (isStringLengthMultipleOfCandidate) {
        return false;
    }

    for (let i = 0; i < string.length; i += candidate.length) {
        if (string.slice(i, i + candidate.length) !== candidate) {
            return false;
        }
    }

    return true;
}

function main() {
    console.log(gcdOfStrings("ABCABC", "ABC"));
    console.log(gcdOfStrings("ABABAB", "ABAB"));
    console.log(gcdOfStrings("LEET", "CODE"));

}

main();