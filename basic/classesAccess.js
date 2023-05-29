"use strict";
// this is the longest way to declare a class
// what I've used in classesCar.ts is the shortest way to declare a class
class Persona {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    displayAge() {
        return this.age;
    }
    changeAge(age) {
        this.age = age;
    }
    changeEmail(email) {
        this.email = email;
    }
}
const persona = new Persona('Juan', 45, 'JuanCarlos@Juan.com');
console.log(persona.name); // Juan
// console.log(persona.age); // Error: 'age' is private
console.log(persona.displayAge()); // 45
persona.name = 'Juan Carlos';
console.log(persona); // { name: 'Juan Carlos', age: 45, email: 'JuanCarlos@Juan' }
// persona.age = 46; // Error: 'age' is private
persona.changeAge(46);
console.log(persona); // { name: 'Juan Carlos', age: 46, email: 'JuanCarlos@Juan' }
persona.changeEmail('CarlosJuan@Juan.com');
console.log(persona); // { name: 'Juan Carlos', age: 46, email: 'CarlosJuan@Juan' }
// private can only be accessed inside the class where it is declared
// protected can be accessed inside the class where it is declared 
// and in the classes that inherit from it and in the instances of those classes
// public can be accessed everywhere (inside and outside the class where it is declared)
