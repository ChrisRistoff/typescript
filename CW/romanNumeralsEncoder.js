"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(number) {
    const symbols = [
        'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
    ];
    const values = [
        1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1
    ];
    let result = '';
    for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        const value = values[i];
        while (number >= value) {
            result += symbol;
            number -= value;
        }
    }
    return result;
}
exports.solution = solution;
console.log(solution(1)); // I
console.log(solution(2)); // II
console.log(solution(3221)); // MMMCCXXI
