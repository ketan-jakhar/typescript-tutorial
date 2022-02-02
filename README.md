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
