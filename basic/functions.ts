function introduce(name: string, age: number, country?: string): string {
  if (country) {
    return `My name is ${name}. I'm ${age} years old. I'm from ${country}.`;
  } else {
  return `My name is ${name}. I'm ${age} years old.`;
  }
}

console.log(introduce("John", 30)); // My name is John. I'm 30 years old.
console.log(introduce("John", 30, "USA")); 
// My name is John. I'm 30 years old. I'm from USA.

// arrow function
const introduce2 = (name: string, age: number): string => {
  return `My name is ${name}. I'm ${age} years old.`;
}

console.log(introduce2("Johny Bravo", 33)); // My name is John. I'm 30 years old.


////////////////////////////////////////////////////////////////////////////////////////
// Custom types in functions (interfaces) //////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

enum AgeUnit {
  Year = "year",
  Month = "months",
}

type Person = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country?: string;
};

function introduce3(person: Person): string {
  if (person.country) {
    return `My name is ${person.name}. I'm ${person.age} ${person.ageUnit} old. I'm from ${person.country}.`;
  } else {
  return `My name is ${person.name}. I'm ${person.age} years old.`;
  }
}

function changeAge(person: Person, age: number): Person {
  person.age = age * 12;
  person.ageUnit = AgeUnit.Month;
  return person;
}

let p1: Person = {
  name: "Krasen",
  age: 33,
  ageUnit: AgeUnit.Year,
  country: "World"
};

p1 = changeAge(p1, 25);
console.log(introduce3(p1)); // My name is John. I'm 300 month old.
