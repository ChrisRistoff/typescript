type User = {
  name: string;
  age: number;
};

type AdminUser = {
  isAdmin: boolean;
};

// intersection type
const user23: User & AdminUser = {
  name: "Taro",
  age: 20,
  isAdmin: true,
};


// union type
const userOrAdmin: User | AdminUser = {
  name: "Taro",
  age: 20,
  isAdmin: true,
};

type ResponseTuple = [string, number];
const response: ResponseTuple = ["ok", 200];

interface Name {
  name: string;
}

interface LastName {
  lastName: string;
}

interface User2 extends Name, LastName {
  age: number;
}

interface User2 {
  isAdmin: boolean;
}

const user24: User2 = {
  name: "Taro",
  lastName: "Yamada",
  age: 20,
  isAdmin: true,
}

console.log(user24);

class Person332 implements Name, LastName {
  name: string;
  lastName: string;
  age: number;
  constructor(name: string, lastName: string, age: number) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }
  
  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }
}

const person332 = new Person332("Taro", "Yamada", 20);

console.log(person332.getFullName());
