// Void and Never types are used to represent functions that do not return a value.
// Void is used when a function may return but has no return value.
// Never is used when a function may not return at all.
// For example, a function that always throws an error.
// Void and Never are subtypes of all other types.
// That means you can assign a void or never value to a number or string variable.
// Void and Never are not the same as null or undefined.

// we assign the return value to addNumbers1 to void
// because the function does not return a value and is not assigned to a variable
const addNumbers2 = (): void => {
  console.log(1 + 2);
}

// we assign the return value to throwError to never
// because the function will never return a value and will always throw an error
const throwError = (message: string): never => {
  throw new Error(message);
}


////////////////////////////////////////////////////////////////////////////////////////
// Enums /////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////


enum Classes {
  "Warrior" = "Warrior",
  "Mage" = "Mage",
  "Paladin" = "Paladin",
  "Bishop" = "Bishop",
  "Rogue" = "Rogue",
  "Hunter" = "Hunter",
  "Druid" = "Druid",
};

type Character = {
  weapon: string;
  hp: number;
  attack: number;
  defense: number;
  class?: Classes;
}


// Enums are used to define a set of named constants.
// Enums are useful when you have a small set of values that are known at compile time.
// For example, a set of character classes in a game.
// Enums are also useful when you want to define a set of values that 
// are more descriptive than numbers.

console.log(Classes.Warrior); // 1

const randomUsername: Character = {
  weapon: "Keyboard",
  hp: 9001,
  attack: 10,
  defense: 10,
  class: Classes.Warrior,
}

console.log(randomUsername);
