
var compareVersion = function(version1, version2) {
    const version1Split = version1.split(".");
    const version2Split = version2.split(".");

    addZeroes(version1Split, version2Split);

    for (let i = 0; i < version1Split.length; i++) {
        const version1SplitNumber = version1Split[i] - "0";
        const version2SplitNumber = version2Split[i] - "0";

        if (version1SplitNumber < version2SplitNumber) {
            return -1;
        } else if (version1SplitNumber > version2SplitNumber) {
            return 1;
        }
    }

    return 0;
}

function addZeroes(version1Split, version2Split) {
    if (version1Split.length === version2Split.length) {
        return;
    } 

    let longestVersion;
    let smallerVersion;

    if (version1Split.length > version2Split.length) {
        longestVersion = version1Split;
        smallerVersion = version2Split;
    } else {
        longestVersion = version2Split;
        smallerVersion = version1Split;
    }

    let zeroesToAdd = longestVersion.length - smallerVersion.length;

    while (zeroesToAdd > 0) {
        smallerVersion.push('0');
        zeroesToAdd--;
    }
}

var compareVersion2 = function(version1, version2) {
    const version1Split = version1.split(".");
    const version2Split = version2.split(".");

    const maxLength = Math.max(version1Split.length, version2Split.length);

    for (let i = 0; i < maxLength; i++) {
        const v1 = parseInt(version1Split[i] || '0', 10);
        const v2 = parseInt(version2Split[i] || '0', 10);

        if (v1 < v2) {
            return -1;
        } else if (v1 > v2) {
            return 1;
        }
    }

    return 0;
}
console.log(compareVersion("1.2", "1.10"));
console.log(compareVersion("1.01", "1.001"));
console.log(compareVersion("1.0", "1.0.0.0"));

