## Getting started

1. Alternative to js (superset)
2. Allows us to use strict types
3. Supports modern features (arrow functions, let, const)
4. Extra features (generics, interfaces, tuples, etc.)

### Prequisites

1. JS - Arrow functions, methods, classes, DOM

2. Nodejs installed on local machine

## Installing TypeScript

```
npm i -g typescript
```

## Compliling TypeScript

```
tsc <filename>.ts
//compiles the file into <filename>.js
```

```
tsc <filename>.ts -w
//keep a watch on recurring changes
```

## Types in TypeScript

1. We can't change the type of a variable once declared.
2. While passing in parameters we need to pass the type check by `: type` .
   For example

```
const circumference = (diameter: number) => diameter * Math.PI;
console.log(circ(10));
```

## Arrays and Objects

### Arrays

```

let names = ["luigi", "mario", "yoshi"];

// names.push("toad");
// names.push(3);
// names[0] = 3;

let numbers = [10, 20, 30, 40];
numbers.push(50);
// numbers.push("zee");
// number[1] = "zee";

let mixed = ["ken", 4, "tory", 5, 6];

mixed.push("ray");
mixed.push(10);
mixed[0] = 3;
```

### Objects

```
let ninja = {
	name: "mario", //has to be string always now
	belt: "black", //has to be string always now
	age: 25, //has to be number always now
};

ninja.name = "luigi";
// ninja.name = 25;
ninja.belt = "green";
// ninja.belt = 15;
ninja.age = 26;
// ninja.age = "25";

// -----------

// ninja = {
//     name: "yoshi";
//     belt: "orange",
// }

// ninja = {
//     name: "yoshi";
//     belt: "orange",
//     age: 25,
//     style: [],
// }

// cant do the above as the initial structure needs to be the same

```

## Explicit Types

```
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = "luigi";
age = 30;

// isLoggedIn = 25;
isLoggedIn = false;
```

### Arrays

```
let ninjas: string[];
// ninjas.push('luigi'); // Cant do this as we haven't initialized it yet with an empty array

// To push an item in it we need to create a new empty array as
let ninjaArr: string[] = [];
ninjaArr.push("mario");
// ninjaArr.push(true);
```

### Union Types

```
let mixed: (string | number)[] = [];
mixed.push(20);
mixed.push("ninja");
// mixed.push(true)

// for variables
let uid: string | number;
uid = 123;
uid = "abc";
```

### Objects

```
let ninjaOne: object;
ninjaOne = {
	name: "ninja",
	age: 25,
};
ninjaOne = []; // as arrays is a type of object

// for explicitly using for objects we can also use

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
```
