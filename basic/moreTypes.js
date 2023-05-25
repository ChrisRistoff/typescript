"use strict";
let firstName = 'Johnathan Gerald S. the Third';
const number = 10;
let numberTwo = 120;
let finalResult;
function addNumbers(num1, num2) {
    return num1 + num2;
}
finalResult = addNumbers(number, numberTwo);
console.log(finalResult);
///////////////////////////////////////////////////////////////////////////////////////
let user22 = {
    name: 'John',
    age: 30,
    address: {
        street: '123 Fake St',
        city: 'Nowhere',
        state: 'NY'
    }
};
let article = {
    title: 'Is TypeScript a woequel',
    body: 'I think',
    date: new Date(),
    // image is optional so it can be omitted
    // that's why there is a question mark after the property name
};
console.log(article);
let post = {
    title: 'Is Python a woequel',
    body: 'I think',
    date: new Date(),
    image: 'https://www.google.com'
};
console.log(post);
let pet = {
    name: 'Fido',
    age: 10,
    friendly: true,
    declawed: false
};
console.log(pet);
function addStringsOrNumbers(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(addStringsOrNumbers(1, 2));
console.log(addStringsOrNumbers('1', '2'));
