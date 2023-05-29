"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAverage = void 0;
function findAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    else {
        let sum = 0;
        for (let n of array) {
            sum += n;
        }
        return sum / array.length;
    }
}
exports.findAverage = findAverage;
let numbers = [21, 32, 22, 11, 23, 44, 55, 66, 77, 88, 99, 100];
console.log(findAverage(numbers));
