class Car1 {
  constructor(
    public make: string, 
    public color: string,
    public type: string,
    public tyres: string,
    public windowsTint: boolean = false
  ) { }

  public repaint(newColor: string): void {
    this.color = newColor;
  }

  public changeType(newType: string): void {
    this.type= newType;
  }

  public changeTyres(newTyres: string): void {
    this.tyres= newTyres;
  }

  public tintWindows(): void {
    this.windowsTint = true;
  }

  public untintWindows(): void {
    this.windowsTint = false;
  }

  public getCarInfo(): string {
    return `Car Make: ${this.make}, color: ${this.color}, type: ${this.type}, tyres: ${this.tyres}, windows tint: ${this.windowsTint}`;
  }
}

class Driver extends Car1 {
  constructor(
    public name: string,
    public age: number,
    public car: Car1,
  ) {
    super(car.make, car.color, car.type, car.tyres, car.windowsTint);
  }

  public getDriverInfo(): string {
    return `Driver name: ${this.name}, age: ${this.age}, ${this.getCarInfo()}`;
  }

  public changeCar(changedCar: Car1) {
    this.car = changedCar;
    super.make = changedCar.make;
    super.color = changedCar.color;
    super.type = changedCar.type;
    super.tyres = changedCar.tyres;
    super.windowsTint = changedCar.windowsTint;
  }
}

const newCar = new Car1('BMW', 'red', 'sedan', 'summer');
console.log(newCar.getCarInfo());
// Car make: BMW, color: red, type: sedan, tyres: summer, windows tint: false
newCar.repaint('blue');
console.log(newCar.getCarInfo());
// Car make: BMW, color: red, type: sedan, tyres: summer, windows tint: false
newCar.changeType('hatchback');
console.log(newCar.getCarInfo());
// Car make: BMW, color: red, type: hatchback, tyres: summer, windows tint: false
newCar.changeTyres('winter');
console.log(newCar.getCarInfo());
// Car make: BMW, color: red, type: hatchback, tyres: winter, windows tint: false
newCar.tintWindows();
console.log(newCar.getCarInfo());
// Car make: BMW, color: red, type: hatchback, tyres: winter, windows tint: true
newCar.untintWindows();
console.log(newCar.getCarInfo());
// Car make: BMW, color: red, type: hatchback, tyres: winter, windows tint: false

let newDriver = new Driver('John', 25, newCar);
console.log(newDriver.getDriverInfo());
// Driver name: John, age: 25, Car make: BMW, color: red, type: hatchback, tyres: winter, windows tint: false

const newCar2 = new Car1('Audi', 'black', 'sedan', 'summer');
newDriver = new Driver('John', 25, newCar2);
// this will create a new instance of Driver saving the old one in memory to be garbage collected
console.log(newDriver.getDriverInfo());
// Driver name: John, age: 25, Car make: Audi, color: black, type: sedan, tyres: summer, windows tint: false
newDriver.tintWindows();
console.log(newDriver.getDriverInfo());

const newCar3 = new Car1('VW', 'green', 'sedan', 'all-season');
newDriver.changeCar(newCar3);
console.log(newDriver.getDriverInfo());
