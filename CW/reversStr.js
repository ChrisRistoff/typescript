"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = void 0;
function reverseWords(str) {
    let splitStr = str.split(' ');
    for (let word of splitStr) {
        let reverseWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reverseWord += word[i];
        }
        str = str.replace(word, reverseWord);
    }
    return str;
}
exports.reverseWords = reverseWords;
const str = 'hello world';
console.log(reverseWords(str));
