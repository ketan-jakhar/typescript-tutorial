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

```
// Arrays
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

// Objects
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

## Dynamic(any) Type

```
let age: any = 25;
age = true;
console.log(age);
age = 25;
console.log(age);
age = "name";
console.log(age);
```

### Array

```
let mixed: any[] = [];
mixed.push(5);
mixed.push("mario");
mixed.push(true);
console.log(mixed);
```

### Object

```
let ninja: { name: any; age: any };
```

## Function basics

```
let greet = () => {
	console.log("hello world!");
};

let fun1: Function;

fun1 = () => {
	console.log("I am a function");
};

let add = (x: number, y: number) => {
	console.log(x + y);
};
```

### void

```
let fun2 = (x: number, y: number, z: number | string = 10): void => {
	console.log(`${x} ${y} ${z}`);
}; // when not returing anything we can use void

const minus = (x: number, y: number): number => {
	return x - y;
};
```

## Type aliases for

```
type StrOrNum = string | number;

const logDetails = (uid: StrOrNum, item: string) => {
	console.log(`${item} has a uid of ${uid}`);
};
```

```
type objWithName = { name: string; uid: StrOrNum };

const greet = (user: objWithName) => {
	console.log(`${user.name} says hello!`);
};

```
