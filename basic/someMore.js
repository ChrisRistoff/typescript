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
////////////////////////////////////////////////////////////////////////////////////////
// Arrays //////////////////////////////////////////////////////////////////////////////
let a1 = [1, 2, 3, 4, 5];
let b1 = ["a", "b", "c", "d", "e"];
let c1 = ["a", 1, "b", 2, "c", 3];
// we can also use the Array type to define an array
// this is useful when we want to define an array of a custom type
// in this case, we are defining an array of type Car (defined above)
// this means that the array can only contain objects that have the properties
// defined in the Car type (make, year, fuel) and the values of those properties
// must be of type string or number (defined in the Car type)
