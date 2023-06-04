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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function CoinDecorator(name) {
    return function (constructor) {
        console.log(`${name} was invoked`);
        console.log(constructor);
    };
}
function ParameterDecorator(classPrototype, methodName, parameterIndex) {
    console.log(classPrototype);
    console.log(methodName);
    console.log(parameterIndex);
}
function PropertyDecorator(classPrototype, propertyName) {
    console.log(classPrototype);
    console.log(propertyName);
}
let Coin = class Coin {
    constructor(_name, value, origin, year) {
        this._name = _name;
        this.value = value;
        this.origin = origin;
        this.year = year;
    }
    get name() {
        return this._name;
    }
    set name(n) {
        this._name = n;
    }
    coinCondition(name, score) {
        console.log(`Coin ${name} is in mint condition`);
    }
};
__decorate([
    __param(0, ParameterDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], Coin.prototype, "coinCondition", null);
Coin = __decorate([
    CoinDecorator("CoinDecorator"),
    __metadata("design:paramtypes", [String, Number, String, Number])
], Coin);
