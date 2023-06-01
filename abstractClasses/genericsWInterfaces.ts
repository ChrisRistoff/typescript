enum AutomobileTypes {
  car = 'car',
  truck = 'truck',
  van = 'van',
  bus = 'bus'
}

enum AutomobileBrands {
  ferrari = 'ferrari',
  lamborghini = 'lamborghini',
  porsche = 'porsche',
  ford = 'ford',
  honda = 'honda',
}

enum AutomobileColors {
  red = 'red',
  blue = 'blue',
  green = 'green',
  black = 'black',
  white = 'white',
}

interface Automobile2<Type, Brand, Colors, Doors> {
  type: Type;
  brand: Brand;
  colors: Colors[];
  doors: Doors;
}

interface CommercialVehicle {
  capacity: number;
  economy: "high" | "medium" | "low";
}

const lamborghini: Automobile2 <
  AutomobileTypes,
  AutomobileBrands,
  AutomobileColors,
  number
  > = {
  type: AutomobileTypes.car,
  brand: AutomobileBrands.lamborghini,
  colors: [AutomobileColors.red, AutomobileColors.white],
  doors: 2,
}

console.log(lamborghini);

const hondaCivic: Automobile2 <string, AutomobileBrands, string, number> = {
  type: 'car',
  brand: AutomobileBrands.honda,
  colors: ['red', 'black'],
  doors: 4,
}

console.log(hondaCivic);


class AutomobileClass implements Automobile2 <AutomobileTypes,
                  AutomobileBrands, AutomobileColors, number> {
  type: AutomobileTypes;
  brand: AutomobileBrands;
  colors: AutomobileColors[];
  doors: number;

  constructor(type: AutomobileTypes, brand: AutomobileBrands, colors: AutomobileColors[], doors: number) {
    this.type = type;
    this.brand = brand;
    this.colors = colors;
    this.doors = doors;
  }
}

const automobileClass = new AutomobileClass(
  AutomobileTypes.car,
  AutomobileBrands.ford,
  [AutomobileColors.red, AutomobileColors.white],
  4,
);

console.log(automobileClass);

class Truck implements Automobile2 <string,
                  AutomobileBrands, AutomobileColors, number>, CommercialVehicle {
  type: string;
  brand: AutomobileBrands;
  colors: AutomobileColors[];
  doors: number;
  capacity: number;
  economy: "high" | "medium" | "low";
  driverName?: string;

  constructor(
    brand: AutomobileBrands,
    colors: AutomobileColors[],
    doors: number,
    capacity: number,
    economy: "high" | "medium" | "low",
    driverName?: string,
  ) {
    this.type = "truck";
    this.brand = brand;
    this.colors = colors;
    this.doors = doors;
    this.capacity = capacity;
    this.economy = economy;
    this.driverName = driverName;
  }
}

const truck = new Truck(
  AutomobileBrands.ford,
  [AutomobileColors.red, AutomobileColors.white],
  4, 100, "high", "John Doe"
);

console.log(truck);
