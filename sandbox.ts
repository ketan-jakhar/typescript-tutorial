// Explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = "luigi";
age = 30;

// isLoggedIn = 25;
isLoggedIn = false;

// arrays
let ninjas: string[];
// ninjas.push('luigi'); // Cant do this as we haven't initialized it yet with an empty array

// To push an item in it we need to create a new empty array as
let ninjaArr: string[] = [];
ninjaArr.push("mario");
// ninjaArr.push(true);

// Union Types

let mixed: (string | number)[] = [];
mixed.push(20);
mixed.push("ninja");
// mixed.push(true)

// for variables
let uid: string | number;
uid = 123;
uid = "abc";

// Objects
let ninjaOne: object;
ninjaOne = {
	name: "ninja",
	age: 25,
};
ninjaOne = []; // as arrays is a type of object

//for explicitly using for objectys we can also use
let ninjaTwo: {
	name: string;
	age: number;
	belt: string;
};

ninjaTwo = {
	name: "luigi",
	age: 25,
	belt: "black",
};
