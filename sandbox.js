// Explicit types
var character;
var age;
var isLoggedIn;
// age = "luigi";
age = 30;
// isLoggedIn = 25;
isLoggedIn = false;
// arrays
var ninjas;
// ninjas.push('luigi'); // Cant do this as we haven't initialized it yet with an empty array
// To push an item in it we need to create a new empty array as
var ninjaArr = [];
ninjaArr.push("mario");
// ninjaArr.push(true);
// Union Types
var mixed = [];
mixed.push(20);
mixed.push("ninja");
// mixed.push(true)
// for variables
var uid;
uid = 123;
uid = "abc";
// Objects
var ninjaOne;
ninjaOne = {
    name: "ninja",
    age: 25
};
ninjaOne = []; // as arrays is a type of object
//for explicitly using for objectys we can also use
var ninjaTwo;
ninjaTwo = {
    name: "luigi",
    age: 25,
    belt: "black"
};
