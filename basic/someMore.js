"use strict";
// intersection types are used to combine multiple types
// in this case, we are combining the types of the two objects
// and creating a new type
// this is useful when we want to create a new object that has
// the properties of two other objects
const someMore = {
    a: 1,
    b: "2",
};
// we can use index signatures to create a type that has any number of properties
// as long as they are all of the same type
// in this case, we are saying that the type Car can have any number of properties
// that are all of type string and return a string value
let car = {
    make: "Honda",
    year: 2010,
    fuel: "gasoline",
};
console.log(car);
let car2 = {
    make: "Honda",
    year: "2010",
    // can't use a number here because the type is expecting a string
    //   year: 2010,
};
console.log(car2);
