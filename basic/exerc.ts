type Airplane = {
  model: string,
  flightNumber: string,
  timeOfDeparture: Date,
  timeOfArrival: Date,
  caterer: {
    name: string,
    address: string,
    phone: number,
    }
};

let flight: Airplane = {
  model: "Airbus A380",
  flightNumber: "BA123",
  timeOfDeparture: new Date(),
  timeOfArrival: new Date(),
  caterer: {
    name: "British Airways",
    address: "123 Fake St",
    phone: 1234567890,
  }
};

console.log(flight);
