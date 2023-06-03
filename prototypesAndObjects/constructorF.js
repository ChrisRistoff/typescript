class Game {
  constructor(name, year, publisher, price) {
    this.name = name;
    this.year = year;
    this.publisher = publisher;
    this.buyPrice = price;
    this.sellPrice = price * 2.5;
  }


buy() {
  console.log("buying " + this.name + " from " + this.publisher + " for " + this.buyPrice);
}

sell() {
  console.log("selling " + this.name + " to random guy for " + this.sellPrice);
  }

changePrice(newPrice) {
  this.buyPrice = newPrice;
  this.sellPrice = newPrice * 2.5;
  console.log("new buy price for " + this.name + " is " + this.buyPrice);
  }

}


let game1 = new Game("Super Mario Bros", 1985, "Nintendo", 10);
let game2 = new Game("Super Mario Bros 2", 1988, "Nintendo", 15);

game1.buy();
game1.sell();
game1.changePrice(20);
game1.sell();

console.log(" ");

game2.buy();
game2.sell();
game2.changePrice(25);
game2.sell();

console.log(" ");

Game.prototype.setPlatform = function(platform) {
  this.platform = platform;
}

Game.prototype.changePublisher = function(newPublisher) {
  this.publisher = newPublisher;
}



function gameOfTheYear(name, year, publisher, price, goty) {
  Game.apply(this, [name, year, publisher, price]);
  this.goty = goty;
}

const goty = gameOfTheYear.prototype = Object.create(Game.prototype);
goty.constructor = gameOfTheYear;
goty.name = "The Legend of Zelda";
goty.year = 1986;
goty.publisher = "Nintendo";
goty.buyPrice = 20;
goty.sellPrice = goty.buyPrice * 2.5;
goty.goty = true;

console.log(goty);
goty.buy();
goty.sell();
goty.changePrice(30);
goty.sell();
goty.changePublisher("Nintendo of America");
goty.setPlatform("NES");
console.log(goty);




game1.changePublisher("Nintendo of America");
game1.changePrice(30);
game1.buy();
game1.sell();
game1.setPlatform("NES");
console.log(game1);

console.log(" ");
