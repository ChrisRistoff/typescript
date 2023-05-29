export function findAverage(array: number[]): number {
  if (array.length === 0) {
    return 0;
  } else {

    let sum = 0;

    for (let n of array) {
      sum += n;
  }
    return sum / array.length;
  }
}

let numbers = [21, 32, 22, 11, 23, 44, 55, 66, 77, 88, 99, 100];

console.log(findAverage(numbers));
