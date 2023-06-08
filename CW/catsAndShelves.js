"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(start, finish) {
    if (start === finish) {
        return 0;
    }
    const difference = Math.abs(finish - start);
    if (difference % 3 === 0) {
        return difference / 3;
    }
    else {
        const remainder = difference % 3;
        const additionalJump = remainder === 1 ? 1 : 2;
        return Math.floor(difference / 3) + additionalJump;
    }
}
exports.solution = solution;
console.log(solution(1, 2)); // 1
console.log(solution(1, 24)); // 7
console.log(solution(5, 25)); // 7
