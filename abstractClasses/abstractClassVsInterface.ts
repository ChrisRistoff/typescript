abstract class Dog2 {
  public name: string;
  public age: number;
  public breed: string;
  constructor(name: string, age: number, breed: string) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

   public bark(): void {
      console.log("Woof!");
      }

  public static info(): void {
    console.log("A dong is a man's best friend");
  }
  
}

class DogOwner extends Dog2 {
  constructor(name: string, age: number, breed: string) {
    super(name, age, breed);
  }
}

const dogOwner = new DogOwner("John", 27, "Pug");

dogOwner.bark();
console.log(dogOwner);
Dog2.info();
