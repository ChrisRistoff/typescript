"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * A decorator is a special kind of declaration that can be attached to a
 * class declaration, method, accessor, property, or parameter.
 * Decorators use the form @expression, where expression must evaluate to a
 * function that will be called at runtime with information about the decorated
 * declaration.
 * Decorators are a stage 2 proposal for JavaScript and are available as an
 * experimental feature of TypeScript. To enable experimental support for decorators,
 * you must enable the experimentalDecorators compiler option either on the command line
 * or in your tsconfig.json:
 * */
// decorators are invoked once when the class is declared, not when the class is instantiated
// decorators are applied to the class constructor function and can be used to observe, modify, or replace a class definition
var Manufacturers;
(function (Manufacturers) {
    Manufacturers["boeing"] = "Boeing";
    Manufacturers["airbus"] = "Airbus";
})(Manufacturers || (Manufacturers = {}));
function AircraftManufacturer(manufacturer) {
    return (target) => {
        if (manufacturer === Manufacturers.boeing) {
            target.prototype.origin = 'USA';
            target.prototype.founded = 1916;
            target.prototype.manufacturer = manufacturer;
            target.prototype.type = 'Commercial';
            target.prototype.boeingMethod = () => {
                console.log('Boeing method');
            };
        }
        else if (manufacturer === Manufacturers.airbus) {
            target.prototype.origin = 'France';
            target.prototype.founded = 1970;
            target.prototype.manufacturer = manufacturer;
            target.prototype.type = 'Jetliner';
            target.prototype.airbusMethod = () => {
                console.log('Airbus method');
            };
        }
    };
}
let Aircraft = class Aircraft {
    constructor(_model, pilot) {
        this._model = _model;
        this.pilot = pilot;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    pilotName() {
        console.log(`The pilot name is ${this.pilot}`);
    }
};
Aircraft = __decorate([
    AircraftManufacturer(Manufacturers.boeing),
    __metadata("design:paramtypes", [String, String])
], Aircraft);
const aircraft = new Aircraft("Boeing 777", 'John Doe');
aircraft.pilotName();
//@ts-ignore
console.log(aircraft.origin); // USA
//@ts-ignore
console.log(aircraft.founded); // 1916
//@ts-ignore
console.log(aircraft.manufacturer); // Boeing
//@ts-ignore
console.log(aircraft.type); // Commercial
let Jet = class Jet {
    constructor(_model, pilot) {
        this._model = _model;
        this.pilot = pilot;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    pilotName() {
        console.log(`The pilot name is ${this.pilot}`);
    }
};
Jet = __decorate([
    AircraftManufacturer(Manufacturers.airbus),
    __metadata("design:paramtypes", [String, String])
], Jet);
const jet = new Jet("Airbus A380", 'John Doe');
jet.pilotName();
//@ts-ignore
console.log(jet.origin); // France
//@ts-ignore
console.log(jet.founded); // 1970
//@ts-ignore
console.log(jet.manufacturer); // Airbus
//@ts-ignore
console.log(jet.type); // Jetliner
