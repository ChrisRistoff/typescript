export function number(busStops: [number, number][]): number {

  let peopleIn = 0;
  let peopleOut = 0;

  for (let inOut of busStops) {
    peopleIn += inOut[0];
    peopleOut += inOut[1];
  }

  return peopleIn - peopleOut;
}


const busStops: [number, number][] = [[10, 0], [3, 5], [5, 8]];

console.log(number(busStops)); // 5
