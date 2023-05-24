let firstNames: string[] = ['John', 'Jane'];

// Error: Argument of type '1' is not assignable to parameter of type 'string'.
// firstNames.push(1); 

firstNames.push('Jack'); // OK

firstNames.push(...['Jill', 'Joe']); // OK

console.log(firstNames); // ['John', 'Jane', 'Jack', 'Jill', 'Joe']

let user1 : { name: string, age: number, active: boolean} = {
  name: 'John',
  age: 30,
  active: true
};

console.log(user1); // { name: 'John', age: 30, active: true }

user1.age = 31;

// user1.age = '32'; // Error: Type '"32"' is not assignable to type 'number'.


const userDetails = (id: number, user: { name: string, age: number, active: boolean}) => {
  console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}.`);
}

userDetails(1, { name: 'John', age: 30, active: true }); // User id is 1, name is John and age is 30.



let lastName: any = 'Doe';

lastName = 10; // OK



function doSomething(number: unknown): unknown {
  return number;
}

let result1 = doSomething(10); // OK
let result2 = doSomething('10'); // OK
let result3 = doSomething(true); // OK

console.log(result1); // 10
console.log(result2); // '10'
console.log(result3); // true

function doSomething1(number: unknown) {
  if (typeof number === 'number') {
    return number * 2;
  }
  else if (typeof number === 'string') {
    return number + number;
  }
}

let result4 = doSomething1(10); // 20
let result5 = doSomething1('10'); // '1010'
let result6 = doSomething1(true); // true

let bool: boolean = true;
// literal values
bool = false; // OK

// bool = "true"; // Error: Type '"true"' is not assignable to type 'boolean'.
