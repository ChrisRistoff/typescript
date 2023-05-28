enum AgeUnit {
  years = 'years',
  months = 'months',
}

type GreetingFunction = (greeting: string) => string;

type Person1 = {
  name: string;
  age: number;
  ageUnit: AgeUnit;
  country?: string;
  greet: GreetingFunction;
};

const person1: Person1 = {
  name: 'Mark',
  age: 35,
  ageUnit: AgeUnit.years,
  greet(greeting: string) {
    return `${greeting}, my name is ${person1.name} ${person1.age} ${person1.ageUnit} old`;
  },
};

console.log(person1.greet('Hello'));


////////////////////////////////////////////////////////////////////////////////////////

type Reservation = {
  departureDate: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};

type Reserve = {
(
  departureDate: Date,
  returnDate: Date,
  departingFrom: string,
  destination: string
): Reservation | never;
(
  departureDate: Date,
  departingFrom: string,
  destination: string
): Reservation | never;
};


const reserve: Reserve = (
  departureDate: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string
) => {
  if (returnDateOrDepartingFrom instanceof Date && destination !== undefined) {
    return {
      departureDate : departureDate,
      returnDate : returnDateOrDepartingFrom,
      departingFrom : departingFromOrDestination,
      destination : destination 
    };
  } else if (typeof returnDateOrDepartingFrom === 'string') {
    return {
      departureDate : departureDate,
      departingFrom : returnDateOrDepartingFrom,
      destination : departingFromOrDestination
    }
  } else {
    throw new Error('Invalid overload');
  }
};

const reserved1 = reserve(new Date(), new Date(), 'Graz', 'Hamburg');
const reserved2 = reserve(new Date(), 'Graz', 'Hamburg');

console.log(reserved1);
console.log(reserved2);
