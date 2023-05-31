"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateCount = void 0;
function duplicateCount(text) {
    const charCountMap = new Map();
    const inputLowerCase = text.toLowerCase();
    for (const char of inputLowerCase) {
        // char.match(/[a-z0-9]/) is a regular expression that matches any character from a to z or 0 to 9 (case insensitive)
        if (char.match(/[a-z0-9]/i)) {
            // charCountMap.get(char) || 0 is a way to get the value of the key char from the map, if it exists, or 0 if it doesn't exist
            charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
        }
    }
    // iterate over the values of the map and count the number of values that are greater than 1
    let duplicatesCount = 0;
    for (const count of charCountMap.values()) {
        if (count > 1) {
            duplicatesCount++;
        }
    }
    return duplicatesCount;
}
exports.duplicateCount = duplicateCount;
let text = "abcde"; // 0
let text2 = "aabbcde"; // 2
let text3 = "aabBcde"; // 2
let text4 = "indivisibility"; // 1
console.log(duplicateCount(text));
console.log(duplicateCount(text2));
console.log(duplicateCount(text3));
console.log(duplicateCount(text4));
