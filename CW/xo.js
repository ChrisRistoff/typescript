"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.xo = void 0;
function xo(str) {
    let xCount = 0;
    let oCount = 0;
    for (let letter of str) {
        if (letter.toLowerCase() === 'x') {
            xCount++;
        }
        if (letter.toLowerCase() === 'o') {
            oCount++;
        }
    }
    return xCount === oCount;
}
exports.xo = xo;
const string1 = 'xoxo';
const string2 = 'xoxoxo';
const string3 = 'xoxoxoxo';
const string4 = 'xoxoxoxoxoxxxx';
console.log(xo(string1));
console.log(xo(string2));
console.log(xo(string3));
console.log(xo(string4));
