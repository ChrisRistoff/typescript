"use strict";
// intersection type
const user23 = {
    name: "Taro",
    age: 20,
    isAdmin: true,
};
// union type
const userOrAdmin = {
    name: "Taro",
    age: 20,
    isAdmin: true,
};
const response = ["ok", 200];
const user24 = {
    name: "Taro",
    lastName: "Yamada",
    age: 20,
    isAdmin: true,
};
console.log(user24);
class Person332 {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
}
const person332 = new Person332("Taro", "Yamada", 20);
console.log(person332.getFullName());
