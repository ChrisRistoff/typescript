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
var ConsoleType;
(function (ConsoleType) {
    ConsoleType["xbox"] = "xbox";
    ConsoleType["playstation"] = "playstation";
})(ConsoleType || (ConsoleType = {}));
function MethodDecorator(classPrototype, methodName, descriptor) {
    descriptor.writable = false;
    console.log(classPrototype.constructor);
    console.log(methodName);
    console.log(descriptor);
}
class Console {
    constructor(_model, conType) {
        this._model = _model;
        this.conType = conType;
    }
    get model() {
        return this._model;
    }
    set model(value) {
        this._model = value;
    }
    conTypeName() {
        console.log(`The console name is ${this.conType}`);
    }
}
__decorate([
    MethodDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Console.prototype, "conTypeName", null);
const ps5 = new Console('PS5', ConsoleType.playstation);
// this will throw an error because I changed the descriptor to not be writable
// ps5.conTypeName = () => { console.log('Another method'); }
