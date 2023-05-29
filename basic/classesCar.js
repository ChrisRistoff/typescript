"use strict";
class Car1 {
    constructor(make, color, type, tyres, windowsTint = false) {
        this.make = make;
        this.color = color;
        this.type = type;
        this.tyres = tyres;
        this.windowsTint = windowsTint;
    }
    repaint(newColor) {
        this.color = newColor;
    }
    changeType(newType) {
        this.type = newType;
    }
    changeTyres(newTyres) {
        this.tyres = newTyres;
    }
    tintWindows() {
        this.windowsTint = true;
    }
    untintWindows() {
        this.windowsTint = false;
    }
    getCarInfo() {
        return `Car Make: ${this.make}, color: ${this.color}, type: ${this.type}, tyres: ${this.tyres}, windows tint: ${this.windowsTint}`;
    }
}
class Driver extends Car1 {
    constructor(name, age, car) {
        super(car.make, car.color, car.type, car.tyres, car.windowsTint);
        this.name = name;
        this.age = age;
        this.car = car;
    }
    getDriverInfo() {
        return `Driver name: ${this.name}, age: ${this.age}, ${this.getCarInfo()}`;
    }
    changeCar(changedCar) {
        this.car = changedCar;
        super.make = changedCar.make;
        super.color = changedCar.color;
        super.type = changedCar.type;
        super.tyres = changedCar.tyres;
        super.windowsTint = changedCar.windowsTint;
    }
}
const newCar = new Car1('BMW', 'red', 'sedan', 'summer');
console.log(newCar.getCarInfo());
// Car make: BMW, color: red, type: sedan, tyres: summer, windows tint: false
newCar.repaint('blue');
console.log(newCar.getCarInfo());
// Car make: BMW, color: red, type: sedan, tyres: summer, windows tint: false
newCar.changeType('hatchback');
console.log(newCar.getCarInfo());
// Car make: BMW, color: red, type: hatchback, tyres: summer, windows tint: false
newCar.changeTyres('winter');
console.log(newCar.getCarInfo());
// Car make: BMW, color: red, type: hatchback, tyres: winter, windows tint: false
newCar.tintWindows();
console.log(newCar.getCarInfo());
// Car make: BMW, color: red, type: hatchback, tyres: winter, windows tint: true
newCar.untintWindows();
console.log(newCar.getCarInfo());
// Car make: BMW, color: red, type: hatchback, tyres: winter, windows tint: false
let newDriver = new Driver('John', 25, newCar);
console.log(newDriver.getDriverInfo());
// Driver name: John, age: 25, Car make: BMW, color: red, type: hatchback, tyres: winter, windows tint: false
const newCar2 = new Car1('Audi', 'black', 'sedan', 'summer');
newDriver = new Driver('John', 25, newCar2);
// this will create a new instance of Driver saving the old one in memory to be garbage collected
console.log(newDriver.getDriverInfo());
// Driver name: John, age: 25, Car make: Audi, color: black, type: sedan, tyres: summer, windows tint: false
newDriver.tintWindows();
console.log(newDriver.getDriverInfo());
const newCar3 = new Car1('VW', 'green', 'sedan', 'all-season');
newDriver.changeCar(newCar3);
console.log(newDriver.getDriverInfo());
