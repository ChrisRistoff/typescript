const game = {
  title: 'The Last of Us',
  developer: 'Naughty Dog',
  releaseYear: 2013,
  platforms: ['PS3', 'PS4'],
  genre: 'Action',
};

console.log(game);

const game2 = new Object();
game2.title = 'God of War';
game2.developer = 'Santa Monica';
game2.releaseYear = 2018;
game2.platforms = ['PS4'];
game2.genre = 'Action';

console.log(game2);


// property descripters
// 1. Value -> value of the property
// 2. Writable (boolean) -> if the property can be changed
// 3. Enumerable (boolean) -> if the property can be enumerated (for...in)
// 4. Configurable (boolean) -> if the property can be deleted or changed

console.log(Object.getOwnPropertyDescriptors(game));


////////////////////////////////////////////////////////////////////////////////////////

const game3 = new Object();
Object.defineProperties(game3, {
  title: {
    value: 'GTA V',
    enumerable: true,
    writable: true,
    configurable: true,
  },

  developer: {
    value: 'Rockstar',
    enumerable: true,
    writable: true,
    configurable: true,
  },
  
  releaseYear: {
    value: 2013,
    enumerable: true,
  },

  platforms: {
    value: ['PS3', 'PS4', 'Xbox One', 'Xbox 360', 'PC'],
    enumerable: true,
}
});

console.log(game3);
console.log(Object.getOwnPropertyDescriptors(game3));

game3. platforms.push('Nintendo Switch');
console.log(game3);
