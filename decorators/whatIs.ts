/*
 * A decorator is a special kind of declaration that can be attached to a
 * class declaration, method, accessor, property, or parameter.
 * Decorators use the form @expression, where expression must evaluate to a
 * function that will be called at runtime with information about the decorated
 * declaration.
 * Decorators are a stage 2 proposal for JavaScript and are available as an
 * experimental feature of TypeScript. To enable experimental support for decorators,
 * you must enable the experimentalDecorators compiler option either on the command line
 * or in your tsconfig.json:
 * */
// decorators are invoked once when the class is declared, not when the class is instantiated
// decorators are applied to the class constructor function and can be used to observe, modify, or replace a class definition
enum Manufacturers {
  boeing = 'Boeing',
  airbus = 'Airbus',
}

interface AircraftInterface {
  _model: string;
  pilot: string;
  prototype?: any;
  origin?: string;
  founded?: number;
  manufacturer?: Manufacturers;
  type?: string;
  pilotName(): void;
  boeingMethod?(): void;
  airbusMethod?(): void;
}


function AircraftManufacturer(manufacturer: Manufacturers) {
  return (target: Function) => {
  if (manufacturer === Manufacturers.boeing) {
    target.prototype.origin = 'USA';
    target.prototype.founded = 1916;
    target.prototype.manufacturer = manufacturer;
    target.prototype.type = 'Commercial';
    target.prototype.boeingMethod = () => {
      console.log('Boeing method');
    };

  } else if (manufacturer === Manufacturers.airbus) {
    target.prototype.origin = 'France';
    target.prototype.founded = 1970;
    target.prototype.manufacturer = manufacturer;
    target.prototype.type = 'Jetliner';
    target.prototype.airbusMethod = () => {
      console.log('Airbus method');
      };
    }
  }}


@AircraftManufacturer(Manufacturers.boeing)
class Aircraft implements AircraftInterface {
  constructor(
    public _model: string,
    public pilot: string,
  ) {}

public get model(): string {
  return this._model;
  }

public set model(value: string) {
  this._model = value;
  }

public pilotName(): void {
  console.log(`The pilot name is ${this.pilot}`);
  }
}

const aircraft = new Aircraft("Boeing 777", 'John Doe');
aircraft.pilotName();

//@ts-ignore
console.log(aircraft.origin); // USA
//@ts-ignore
console.log(aircraft.founded); // 1916
//@ts-ignore
console.log(aircraft.manufacturer); // Boeing
//@ts-ignore
console.log(aircraft.type); // Commercial



@AircraftManufacturer(Manufacturers.airbus)
class Jet implements AircraftInterface {
  constructor(
    public _model: string,
    public pilot: string,
  ) {}

public get model(): string {
  return this._model;
  }

public set model(value: string) {
  this._model = value;
  }

public pilotName(): void {
  console.log(`The pilot name is ${this.pilot}`);
  }
}

const jet = new Jet("Airbus A380", 'John Doe');
jet.pilotName();

//@ts-ignore
console.log(jet.origin); // France
//@ts-ignore
console.log(jet.founded); // 1970
//@ts-ignore
console.log(jet.manufacturer); // Airbus
//@ts-ignore
console.log(jet.type); // Jetliner
