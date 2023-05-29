"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = void 0;
function number(busStops) {
    let peopleIn = 0;
    let peopleOut = 0;
    for (let inOut of busStops) {
        peopleIn += inOut[0];
        peopleOut += inOut[1];
    }
    return peopleIn - peopleOut;
}
exports.number = number;
const busStops = [[10, 0], [3, 5], [5, 8]];
console.log(number(busStops)); // 5
