"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validBraces = void 0;
function validBraces(braces) {
    do {
        var length = braces.length;
        braces = braces.replace("()", "").replace("[]", "").replace("{}", "");
    } while (length !== braces.length);
    return braces.length === 0;
}
exports.validBraces = validBraces;
function validBraces2(braces) {
    const openingBraces = '({[';
    const closingBraces = ')}]';
    const stack = [];
    for (let i = 0; i < braces.length; i++) {
        const currentBrace = braces[i];
        if (openingBraces.includes(currentBrace)) {
            stack.push(currentBrace);
        }
        else if (closingBraces.includes(currentBrace)) {
            const lastOpeningBrace = stack.pop();
            if (!lastOpeningBrace ||
                openingBraces.indexOf(lastOpeningBrace) !== closingBraces.indexOf(currentBrace)) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])")); // true
console.log(validBraces("()[{)}")); // false
console.log(validBraces2("(){}[]")); // true
console.log(validBraces2("([{}])")); // true
console.log(validBraces2("()[{)}")); // false
