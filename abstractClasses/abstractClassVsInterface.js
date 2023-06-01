"use strict";
class Dog2 {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    bark() {
        console.log("Woof!");
    }
    static info() {
        console.log("A dong is a man's best friend");
    }
}
class DogOwner extends Dog2 {
    constructor(name, age, breed) {
        super(name, age, breed);
    }
}
const dogOwner = new DogOwner("John", 27, "Pug");
dogOwner.bark();
console.log(dogOwner);
Dog2.info();
