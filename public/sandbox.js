"use strict";
let greet = () => {
	console.log("hello world!");
};
let fun1;
fun1 = () => {
	console.log("I am a function");
};
let add = (x, y) => {
	console.log(x + y);
};
let fun2 = (x, y, z = 10) => {
	console.log(`${x} ${y} ${z}`);
}; // when not returing anything we can use void
const minus = (x, y) => {
	return x - y;
};
