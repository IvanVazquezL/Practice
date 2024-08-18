var intToRoman = function(num) {
    const values = [
        1000,
        900,
        500,
        400,
        100,
        90, 
        50, 
        40, 
        10, 
        9, 
        5, 
        4, 
        1
    ];
    const symbols = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];
    let romanNumeral = "";

    for (let i = 0; i < values.length; i++) {
        while (values[i] <= num) {
            romanNumeral += symbols[i];
            num -= values[i];
        }
    }

    return romanNumeral;
};

console.log(intToRoman(3749));
console.log(intToRoman(58));