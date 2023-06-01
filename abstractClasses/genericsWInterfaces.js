"use strict";
var AutomobileTypes;
(function (AutomobileTypes) {
    AutomobileTypes["car"] = "car";
    AutomobileTypes["truck"] = "truck";
    AutomobileTypes["van"] = "van";
    AutomobileTypes["bus"] = "bus";
})(AutomobileTypes || (AutomobileTypes = {}));
var AutomobileBrands;
(function (AutomobileBrands) {
    AutomobileBrands["ferrari"] = "ferrari";
    AutomobileBrands["lamborghini"] = "lamborghini";
    AutomobileBrands["porsche"] = "porsche";
    AutomobileBrands["ford"] = "ford";
    AutomobileBrands["honda"] = "honda";
})(AutomobileBrands || (AutomobileBrands = {}));
var AutomobileColors;
(function (AutomobileColors) {
    AutomobileColors["red"] = "red";
    AutomobileColors["blue"] = "blue";
    AutomobileColors["green"] = "green";
    AutomobileColors["black"] = "black";
    AutomobileColors["white"] = "white";
})(AutomobileColors || (AutomobileColors = {}));
const lamborghini = {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.lamborghini,
    colors: [AutomobileColors.red, AutomobileColors.white],
    doors: 2,
};
console.log(lamborghini);
const hondaCivic = {
    type: 'car',
    brand: AutomobileBrands.honda,
    colors: ['red', 'black'],
    doors: 4,
};
console.log(hondaCivic);
class AutomobileClass {
    constructor(type, brand, colors, doors) {
        this.type = type;
        this.brand = brand;
        this.colors = colors;
        this.doors = doors;
    }
}
const automobileClass = new AutomobileClass(AutomobileTypes.car, AutomobileBrands.ford, [AutomobileColors.red, AutomobileColors.white], 4);
console.log(automobileClass);
class Truck {
    constructor(brand, colors, doors, capacity, economy, driverName) {
        this.type = "truck";
        this.brand = brand;
        this.colors = colors;
        this.doors = doors;
        this.capacity = capacity;
        this.economy = economy;
        this.driverName = driverName;
    }
}
const truck = new Truck(AutomobileBrands.ford, [AutomobileColors.red, AutomobileColors.white], 4, 100, "high", "John Doe");
console.log(truck);
