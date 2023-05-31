class Person3 {
  constructor(
    private _name: string,
    private _age: number,
  ) {}

public set name(name: string) {
  this._name = name;
}

public get name(): string {
  return this._name;
}

public set age(age: number) {
  if (age > 120 || age < 0) {
    console.log('Why are you lying about your age?');
    age = 0;
  }
  this._age = age;
  }

public get age(): number {
  return this._age;
  }

}

const person3 = new Person3('Mark', 39);
person3.age = 1000;
console.log("Age: ", person3.age);
console.log("Name: ", person3.name);
