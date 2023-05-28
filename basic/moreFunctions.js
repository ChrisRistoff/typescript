"use strict";
var AgeUnit;
(function (AgeUnit) {
    AgeUnit["years"] = "years";
    AgeUnit["months"] = "months";
})(AgeUnit || (AgeUnit = {}));
const person1 = {
    name: 'Mark',
    age: 35,
    ageUnit: AgeUnit.years,
    greet(greeting) {
        return `${greeting}, my name is ${person1.name} ${person1.age} ${person1.ageUnit} old`;
    },
};
console.log(person1.greet('Hello'));
const reserve = (departureDate, returnDateOrDepartingFrom, departingFromOrDestination, destination) => {
    if (returnDateOrDepartingFrom instanceof Date && destination !== undefined) {
        return {
            departureDate: departureDate,
            returnDate: returnDateOrDepartingFrom,
            departingFrom: departingFromOrDestination,
            destination: destination
        };
    }
    else if (typeof returnDateOrDepartingFrom === 'string') {
        return {
            departureDate: departureDate,
            departingFrom: returnDateOrDepartingFrom,
            destination: departingFromOrDestination
        };
    }
    else {
        throw new Error('Invalid overload');
    }
};
const reserved1 = reserve(new Date(), new Date(), 'Graz', 'Hamburg');
const reserved2 = reserve(new Date(), 'Graz', 'Hamburg');
console.log(reserved1);
console.log(reserved2);
