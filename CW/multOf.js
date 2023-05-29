"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Challenge = void 0;
class Challenge {
    static solution(number) {
        if (number < 0) {
            return 0;
        }
        let sum = 0;
        let rangeOfNumbers = [];
        for (let i = 0; i < number; i++) {
            rangeOfNumbers.push(i);
        }
        rangeOfNumbers.forEach((num) => {
            if (num % 3 === 0 || num % 5 === 0) {
                sum += num;
            }
        });
        return sum;
    }
}
exports.Challenge = Challenge;
console.log(Challenge.solution(10));
console.log(Challenge.solution(20));
console.log(Challenge.solution(200));
// negative numbers
console.log(Challenge.solution(-10));
console.log(Challenge.solution(-20));
console.log(Challenge.solution(-200));
