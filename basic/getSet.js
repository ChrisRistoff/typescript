"use strict";
class Person3 {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    set name(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    set age(age) {
        if (age > 120 || age < 0) {
            console.log('Why are you lying about your age?');
            age = 0;
        }
        this._age = age;
    }
    get age() {
        return this._age;
    }
}
const person3 = new Person3('Mark', 39);
person3.age = 1000;
console.log("Age: ", person3.age);
console.log("Name: ", person3.name);
console.log(person3);
