let firstName: string = 'Johnathan Gerald S. the Third';

const number = 10;
let numberTwo = 120;
let finalResult: number;

function addNumbers(num1: number, num2: number) {
  return num1 + num2;
}

finalResult = addNumbers(number, numberTwo);

console.log(finalResult);


///////////////////////////////////////////////////////////////////////////////////////

let user22 = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Fake St',
    city: 'Nowhere',
    state: 'NY'
  }
};

// types of user get inferred from the object above meaning that user is of type 
//{ name: string, age: number, address: { street: string, city: string, state: string } }
// this is called type inference and is a powerful feature of TypeScript
//
//
//
type Article = { title: string, body: string, date: Date, image?: string };

let article: Article = {
  title: 'Is TypeScript a woequel',
  body: 'I think',
  date: new Date(),

  // image is optional so it can be omitted
  // that's why there is a question mark after the property name

};

console.log(article);

let post: Article = {
  title: 'Is Python a woequel',
  body: 'I think',
  date: new Date(),
  image: 'https://www.google.com'
};

console.log(post);



///////////////////////////////////////////////////////////////////////////////////////
// Union Types - a type that can be one of several types //////////////////////////////

type Dog = { name: string, age: number, friendly: boolean };
type Cat = { name: string, age: number, declawed: boolean };

type DogAndCatUnion = Dog | Cat; // DogAndCatUnion can be either a Dog or a Cat

let pet: DogAndCatUnion = {
  name: 'Fido',
  age: 10,
  friendly: true,
  declawed: false
};

console.log(pet);



///////////////////////////////////////////////////////////////////////////////////////
// custom types ///////////////////////////////////////////////////////////////////////

type stringOrNumber = string | number;

function addStringsOrNumbers(a: stringOrNumber, b: stringOrNumber) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  else {
    return a.toString() + b.toString();
  }
}


console.log(addStringsOrNumbers(1, 2));
console.log(addStringsOrNumbers('1', '2'));
