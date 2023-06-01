"use strict";
const person4 = {
    name: "John",
    email: "john@whatever.com",
    age: 30,
};
// difference between type and interface is that interface can be extended
// by other interfaces but type cannot be extended by other types
const person5 = {
    name: "Johney",
    email: "johnathan@gmail.com",
    age: 40,
    address: "1234 Main St",
};
// other things to note about interfaces is that they can be used to define
// function types and also class types as well
class Person6 {
    constructor(name, email, age, address, role) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = address;
        this.role = role;
    }
    greet() {
        console.log(`Hello ${this.name}, from ${this.address}, aged ${this.age}`);
    }
    changeName(name) {
        this.name = name;
    }
}
const person6 = new Person6("John", "www.john.com", 30, "1234 Main St", "user");
console.log(person6);
person6.greet();
person6.changeName("Johnathan");
console.log(person6.name);
let myDoubleFunction;
myDoubleFunction = function (num1, num2) {
    return num1 + num2;
};
console.log(myDoubleFunction(10, 20));
