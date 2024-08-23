const numberToWordsMap = new Map([
    [1000000000, "Billion"], [1000000, "Million"], [1000, "Thousand"],
    [100, "Hundred"], [90, "Ninety"], [80, "Eighty"], [70, "Seventy"],
    [60, "Sixty"], [50, "Fifty"], [40, "Forty"], [30, "Thirty"],
    [20, "Twenty"], [19, "Nineteen"], [18, "Eighteen"], [17, "Seventeen"],
    [16, "Sixteen"], [15, "Fifteen"], [14, "Fourteen"], [13, "Thirteen"],
    [12, "Twelve"], [11, "Eleven"], [10, "Ten"], [9, "Nine"], [8, "Eight"],
    [7, "Seven"], [6, "Six"], [5, "Five"], [4, "Four"], [3, "Three"],
    [2, "Two"], [1, "One"]
]);

var numberToWords = function(num) {
    if (num === 0) return "Zero";

    let result = '';
    for (const [value, word] of numberToWordsMap) {
        if (num >= value) {
            if (result !== '') {
                result += ' '; // Add space only if result is not empty
            }
            if (value >= 100) {
                result += numberToWords(Math.floor(num / value)) + ' ';
            }
            result += word;
            num %= value;
            if (num > 0) {
                result += ' ' + numberToWords(num);
            }
            break;
        }
    }
    return result;
};


console.log(numberToWords(123));
console.log(numberToWords(12345));
console.log(numberToWords(1234567));