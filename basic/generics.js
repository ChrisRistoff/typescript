"use strict";
const filter = (array, predicate) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
};
let numbers1 = [1, 2, 3, 4, 5, 21, 43, 56, 78, 98, 100];
function greaterThan40(value) {
    return value > 40;
}
console.log(filter(numbers1, greaterThan40));
////////////////////////////////////////////////////////////////////////////////////////
let animals = ["cat", "dog", "horse", "cow", "goat", "elephant"];
function filterCats(value) {
    return value === "cat";
}
console.log(filter(animals, filterCats));
