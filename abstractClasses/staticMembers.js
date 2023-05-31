"use strict";
class Automobile {
    static calculateEconomy(miles, gallons) {
        return miles / gallons;
    }
}
Automobile.numberOfWheels = 4;
console.log(Automobile.numberOfWheels); // 4
console.log(Automobile.calculateEconomy(230, 4)); // 57.5
// static members can be accessed from outside the class
// using the class name itself or the class instance
// we don't need to create an instance of the class to access static members
const pi = Math.PI;
console.log(pi); // 3.141592653589793
