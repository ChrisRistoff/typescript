"use strict";
class DogOwner2 {
    constructor(name, age, breed, ownerName, ownerAge) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.ownerName = ownerName;
        this.ownerAge = ownerAge;
    }
    bark() {
        console.log("Woof!");
    }
}
console.log(new DogOwner2("John", 27, "Pug", "Taro", 20));
