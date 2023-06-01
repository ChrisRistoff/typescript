interface Dog3 {
  name: string;
  age: number;
  breed: string;
  bark(): void;
}

interface DogOwner3 {
  ownerName: string;
  ownerAge: number;
}

class DogOwner2 implements Dog3, DogOwner3 {
  constructor(
    public name: string,
    public age: number,
    public breed: string,
    public ownerName: string,
    public ownerAge: number
  ) {}

  bark(): void {
    console.log("Woof!");

  }
}

console.log(new DogOwner2("John", 27, "Pug", "Taro", 20));
