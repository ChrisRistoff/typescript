// <T> is a generic type parameter 
// that will be replaced by a concrete type during the call of the function.
// The type parameter can be used to describe the type of the arguments and the return value.
type Filter = {
  <T>(array: T[], predicate: (item: T) => boolean): T[];
};

const filter: Filter = (array, predicate) => {

  let result = [];

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (predicate(item)) {
      result.push(item);
    }
  }
  return result;
};

let numbers1 = [1, 2, 3, 4, 5, 21, 43, 56, 78, 98, 100];

function greaterThan40(value: number) {
  return value > 40;
}

console.log(filter(numbers1, greaterThan40));


////////////////////////////////////////////////////////////////////////////////////////

let animals = ["cat", "dog", "horse", "cow", "goat", "elephant"];

function filterCats(value: string) {
  return value === "cat";
}

console.log(filter(animals, filterCats));

////////////////////////////////////////////////////////////////////////////////////////
// With this syntax, the type parameter is defined before the function name.
// This is the preferred syntax for generic functions.
type Filter2<T> = {
  (array: T[], predicate: (item: T) => boolean): T[];
};
