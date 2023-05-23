var user = {
    name: 'John',
    age: 30,
    address: {
        street: 'Main Street',
        number: 123,
    },
};
var user2 = {
    name: 'John',
    age: 30,
    address: {
        street: 'Main Street',
        number: 123,
    },
};
var getUserAddress = function (user) {
    return user.address;
};
var userAddress = getUserAddress(user);
console.log(userAddress);
