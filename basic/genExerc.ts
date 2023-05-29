const map = <T, U>(array: T[], func:(item: T)=> U) => {

  // Check if array is empty
  if (array.length === 0) return [];

  // create a new array to collect the results
  let result = [];

  // iterate through array and apply func to each item
  for (let i = 0; i < array.length; i++) {
    result.push(func(array[i]));
  }

  return result;
}


let numbers2 = [1, 2, 3, 4, 5];

const converted = map(numbers2, (item) => item.toString());

console.log(converted); // ['1', '2', '3', '4', '5']
