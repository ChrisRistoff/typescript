let person: [string, string, number?] // ? means optional value
person = ['John', 'Doe']

let numberOfStudents: [number, boolean, ...string[]]
// ... means rest of the values are strings and there can be any number of them
// [] means the array can be empty or have any number of values in it

numberOfStudents = [4, true, 'John', 'Doe', 'Jane', 'Doe']
let numberOfStudentsPassed = numberOfStudents // this is allowed

numberOfStudents = [4, false, 'Julia', 'Michael', 'Berger', 'Georgie']
let numberOfStudentsFailed = numberOfStudents // this is allowed

console.log(numberOfStudentsPassed)
console.log(numberOfStudentsFailed)


///////////////////////////////////////////////////////////////////////////////////////
// readonly arrays and tuples (immutable arrays and tuples) ///////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

let numbers: readonly number[] = [1, 2, 3, 4, 5]
// numbers.push(6) // this is not allowed
// numbers[0] = 10 // this is not allowed
// numbers.pop() // this is not allowed
// etc.

let names: ReadonlyArray<string> = ['John', 'Doe']
// names.push('Jane') // this is not allowed
// etc.

let names2: readonly string[] = ['Johny', 'Doey', 'Janey']
// different way of declaring a readonly array, but same result as above
// only syntax is different, more preferred way is above one (ReadonlyArray<string>)

console.log(names)
console.log(names2)


///////////////////////////////////////////////////////////////////////////////////////
// null and undefined /////////////////////////////////////////////////////////////////
// null and undefined are subtypes of all other types (string, number, boolean, etc.) //
// null and undefined are assignable to all other types (string, number, boolean, etc.) /
// null and undefined are not assignable to each other ////////////////////////////////

let myName: string
// myName = null // this is allowed
// myName = undefined // this is allowed

// console.log(myName) 
// variable is declared but not initialized, so it is undefined
// so we get an error when we try to print it out to the console

let myName2: string | null | undefined
// myName2 = null // this is allowed
// myName2 = undefined // this is allowed
// myName2 = 'John' // this is allowed

console.log(myName2) // undefined


///////////////////////////////////////////////////////////////////////////////////////z
// example //////////////////////////////////////////////////////////////////////////////

let loggedInUser: string;

const users = [
  { name: 'Max', age: 30 },
  { name: 'Manuel', age: 31 }
];

// loggedInUser = users.find((user: {name: string, age: number}) => user.name === 'Max').name;
// object is possibly undefined

// console.log(loggedInUser.name) // Property 'name' does not exist on type 'string'


let saveBtn: HTMLElement = document.getElementById("save")!;
// the ! tells typescript that the element is not null or undefined and it will never be
// so we are allowed to transpile the code even though 
// typescript thinks it is null or undefined
