const user = {
  name: 'John',
  age: 30,
  address: {
    street: 'Main Street',
    number: 123,
  },
};

const user2 = {
  name: 'John',
  age: 30,
  address: {
    street: 'Main Street',
    number: 123,
  },
};


const getUserAddress = (user: any) => {
  return user.address;
};

const userAddress = getUserAddress(user);

console.log(userAddress); // Main Street
