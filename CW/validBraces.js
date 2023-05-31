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
console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])")); // true
console.log(validBraces("()[{)}")); // false
